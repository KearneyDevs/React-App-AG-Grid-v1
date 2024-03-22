import { useState, useEffect, Suspense } from "react";
import AgDataGrid from "./general/AgDataGrid";
import { ColDef, ValueFormatterParams } from "ag-grid-community";
import useFetch from "../hooks/useFetch";

const AnchorTo = (p: any) => {
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

  const { data, loading, error } = useFetch(
    "http://localhost:3001/api/distillery_data/speyside"
  );

  const formatCurrency = (params: ValueFormatterParams) => {
    return "£" + params.value.toLocaleString();
  };

  const colDefs: ColDef[] = [
    { headerName: "Distillery Name", field: "name", cellRenderer: AnchorTo },
    { headerName: "Date", field: "dt" },
    {
      headerName: "Winning Bid Max",
      field: "winning_bid_max",
      valueFormatter: formatCurrency,
    },
    {
      headerName: "Winning Bid Min",
      field: "winning_bid_min",
      valueFormatter: formatCurrency,
    },
    {
      headerName: "Winning Bid Mean",
      field: "winning_bid_mean",
      valueFormatter: formatCurrency,
    },
    { headerName: "Trading Vol", field: "trading_volume" },
    { headerName: "Lots Count", field: "lots_count" },
  ];

  useEffect(() => {
    if (data) {
      setRowData(data as IRow[]);
    }
  }, [data]);

  return (
    <>
      {error ? (
        <h2>{error.message}</h2>
      ) : (
        <AgDataGrid colDefs={colDefs} rowData={rowData} pagination={true} />
      )}
    </>
  );
};

export default DistilleriesInfo;
