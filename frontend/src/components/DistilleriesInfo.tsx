import { useState, useEffect } from "react";
import AgDataGrid from "./general/AgDataGrid";
import { ColDef } from "ag-grid-community";
import useFetch from "../hooks/useFetch";

const AnchorTo = (p: { value: string; data: { slug: string } }) => {
  const { value, data } = p;
  const { slug } = data;
  return <a href={`/distilleries/${slug}`}>{value}</a>; // Use slug in the href
};

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

  const { data, loading, error } = useFetch(
    "http://localhost:3001/api/distilleries_info"
  );

  const colDefs: ColDef[] = [
    { headerName: "Distillery Name", field: "name", cellRenderer: AnchorTo },
    { headerName: "Country", field: "country", filter: true },
    {
      headerName: "Whiskies",
      field: "whiskybase_whiskies",
    },
    {
      headerName: "Votes",
      field: "whiskybase_votes",
    },
    {
      headerName: "Rating",
      field: "whiskybase_rating",
    },
  ];

  useEffect(() => {
    if (data) {
      setRowData(data as IRow[]);
    }
  }, [data]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return <AgDataGrid colDefs={colDefs} rowData={rowData} pagination={true} />;
};

export default DistilleriesInfo;
