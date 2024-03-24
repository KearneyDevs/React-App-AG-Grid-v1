import { useState, useEffect } from "react";
import { ColDef } from "ag-grid-community";
import { useParams } from "react-router-dom";
import AgDataGrid from "./general/AgDataGrid";
import useFetch from "../hooks/useFetch";
import InputField from "./general/InputField";
import { handleSearch } from "../utils/functions";

interface IRow {
  [key: string]: string;
}

interface ComponentProps {
  config: {
    colDefs: ColDef[];
    searchFields?: string[];
    placeHolder?: string;
    URL: string;
  };
}

const DataTableWithFilter: React.FC<ComponentProps> = ({ config }) => {
  const { colDefs, searchFields, placeHolder, URL } = config;

  const { slug } = useParams<{ slug: string }>();
  const [rowData, setRowData] = useState<IRow[]>([]);
  const [filteredData, setFilteredData] = useState<IRow[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, loading, error } = useFetch(slug ? `${URL}${slug}` : URL);

  useEffect(() => {
    if (data) {
      setRowData(data as IRow[]);
      setFilteredData(data as IRow[]);
    }
  }, [data]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {searchFields && (
        <div className="md:w-1/2">
          <InputField
            name="search"
            label="Search"
            placeholder={placeHolder}
            type="text"
            value={searchTerm}
            onChange={(e) =>
              handleSearch(
                e,
                searchFields,
                rowData,
                setSearchTerm,
                setFilteredData
              )
            }
          />
        </div>
      )}

      <AgDataGrid colDefs={colDefs} rowData={filteredData} pagination={true} />
    </>
  );
};

export default DataTableWithFilter;
