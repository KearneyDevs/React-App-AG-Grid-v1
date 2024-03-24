import { useState, useEffect } from "react";
import AgDataGrid from "./general/AgDataGrid";
import { ColDef } from "ag-grid-community";
import useFetch from "../hooks/useFetch";
import { convertStringToNumber } from "../utils/functions";
import customCellRenderer from "../utils/customCellRenderer";
import Message from "./general/Message";

interface IRow {
  name: string;
  slug: string;
  country: string;
  whiskybase_whiskies: string;
  whiskybase_votes: string;
  whiskybase_rating: string;
}

const DistilleriesInfo = () => {
  const [rowData, setRowData] = useState<IRow[]>([]);
  const [filteredData, setFilteredData] = useState<IRow[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, loading, error } = useFetch(
    "http://localhost:3001/api/distilleries_info"
  );

  const colDefs: ColDef[] = [
    { headerName: "Distillery Name", field: "name", cellRenderer: customCellRenderer("slug", '/distilleries/', "name") },
    { headerName: "Country", field: "country", filter: true },
    {
      headerName: "Whiskies",
      field: "whiskybase_whiskies",
      valueGetter: convertStringToNumber("whiskybase_whiskies") 
    },
    {
      headerName: "Votes",
      field: "whiskybase_votes",
      valueGetter: convertStringToNumber("whiskybase_votes") 
    },
    {
      headerName: "Rating",
      field: "whiskybase_rating",
      valueGetter: convertStringToNumber("whiskybase_rating") 
    },
  ];

  useEffect(() => {
    if (data) {
      setRowData(data as IRow[]);
      setFilteredData(data as IRow[]);
    }
  }, [data]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = rowData.filter(
      (row) =>
        row.name.toLowerCase().includes(value) ||
        row.country.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
    <Message color="green" message="Form has been submitted successfully!" />
      <input
        className="shadow appearance-none border rounded mb-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-1/2"
        type="text"
        placeholder="Search by name or country"
        value={searchTerm}
        onChange={handleSearch}
      />
      <AgDataGrid colDefs={colDefs} rowData={filteredData} pagination={true} />
    </>
  );
};

export default DistilleriesInfo;
