import { useState, useEffect } from "react";
import AgDataGrid from "./general/AgDataGrid";
import { ColDef, ValueFormatterParams } from "ag-grid-community";
import useFetch from "../hooks/useFetch";

const AnchorTo = (p: { value: string; data: { auction_slug: string } }) => {
  console.log(p);
  const { value, data } = p;
  const { auction_slug } = data;
  return <a href={`/auctions/${auction_slug}`}>{value}</a>; // Use slug in the href
};

interface IRow {
  dt: string;
  winning_bid_max: number;
  winning_bid_min: number;
  winning_bid_mean: number;
  auction_trading_volume: number;
  auction_lots_count: number;
  all_auctions_lots_count: number;
  auction_name: string;
}

const Auction = () => {
  const [rowData, setRowData] = useState<IRow[]>([]);

  const { data, loading, error } = useFetch(
    `http://localhost:3001/api/auctions_data/`
  );

  const formatCurrency = (params: ValueFormatterParams) => {
    return "£" + params.value.toLocaleString();
  };

  const colDefs: ColDef[] = [
    { headerName: "Auction", field: "auction_name", cellRenderer: AnchorTo },
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
    { headerName: "Auction Trading Volume", field: "auction_trading_volume" },
    { headerName: "Auction Lots Count", field: "auction_lots_count" },
    { headerName: "All Auctions Lots Count", field: "all_auctions_lots_count" },
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

export default Auction;
