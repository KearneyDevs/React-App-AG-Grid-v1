import { useState, useEffect } from "react";
import AgDataGrid from "./general/AgDataGrid";
import { ColDef, ValueFormatterParams } from "ag-grid-community";

const AnchorTo = (p: any) => {
  console.log(p);
  return <a href={"/"}>{p.value}</a>;
};

interface IRow {
  dt: string;
  winning_bid_max: number;
  winning_bid_min: number;
  winning_bid_mean: number;
  trading_volume: number;
  lots_count: number;
  slug: string;
  name: string;
}

const DistilleriesInfo = () => {
  const [rowData, setRowData] = useState<IRow[]>([]);
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { headerName: "Distillery Name", field: "name", cellRenderer: AnchorTo },
    { headerName: "Date", field: "dt" },
    {
      headerName: "Winning Bid Max",
      field: "winning_bid_max",
      valueFormatter: (params: ValueFormatterParams) => {
        return "£" + params.value.toLocaleString();
      },
    },
    {
      headerName: "Winning Bid Min",
      field: "winning_bid_min",
      valueFormatter: (params: ValueFormatterParams) => {
        return "£" + params.value.toLocaleString();
      },
    },
    {
      headerName: "Winning Bid Mean",
      field: "winning_bid_mean",
      valueFormatter: (params: ValueFormatterParams) => {
        return "£" + params.value.toLocaleString();
      },
    },
    {
      headerName: "Trading Vol",
      field: "trading_volume",
    },
    {
      headerName: "Lots Count",
      field: "lots_count",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/api/distillery_data/speyside")
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
