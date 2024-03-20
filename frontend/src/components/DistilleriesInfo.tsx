import { useState, useEffect } from "react";
import AgDataGrid from "./general/AgDataGrid";
import { ColDef } from "ag-grid-community";

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
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { headerName: "Distillery Name", field: "name" },
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
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/api/distilleries_info")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Work with the JSON data here
        setRowData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch operation
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <div>
      <AgDataGrid colDefs={colDefs} rowData={rowData} pagination={true} />
    </div>
  );
};

export default DistilleriesInfo;
