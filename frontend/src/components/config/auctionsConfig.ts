import { ColDef } from "ag-grid-community";
import customCellRenderer from "../../utils/customCellRenderer";
import { formatCurrency } from "../../utils/functions";

type ColDefType = ColDef[];

export const componentConfig = {
  colDefs: <ColDefType>[
    {
      headerName: "Auction",
      field: "auction_name",
      cellRenderer: customCellRenderer(
        "auction_slug",
        "/auctions/",
        "auction_name"
      ),
    },
    { headerName: "Date", field: "dt" },
    {
      headerName: "Highest Winning Bid",
      field: "winning_bid_max",
      valueFormatter: formatCurrency,
    },
    {
      headerName: "Lowest Winning Bid",
      field: "winning_bid_min",
      valueFormatter: formatCurrency,
    },
    {
      headerName: "Average Winning Bid",
      field: "winning_bid_mean",
      valueFormatter: formatCurrency,
    },
    { headerName: "Auction Trading Volume", field: "auction_trading_volume" },
    { headerName: "Auction Lots Count", field: "auction_lots_count" },
    { headerName: "All Auctions Lots Count", field: "all_auctions_lots_count" },
  ],
  searchFields: ["auction_name"],
  placeHolder: "Search by name",
  URL: "http://localhost:3001/api/auctions_data/",
};
