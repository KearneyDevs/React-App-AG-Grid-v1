import { useState, useEffect } from "react";
import AgDataGrid from "./general/AgDataGrid";
import { ColDef, ValueFormatterParams } from "ag-grid-community";

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
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { headerName: "Auction", field: "auction_name" },
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
    { headerName: "Auction Trading Volume", field: "auction_trading_volume" },
    { headerName: "Auction Lots Count", field: "auction_lots_count" },
    { headerName: "All Auctions Lots Count", field: "all_auctions_lots_count" },
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/api/auctions_data")
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

export default Auction;
