import { ColDef } from "ag-grid-community";
import { formatCurrency } from "../../utils/functions";

type ColDefType = ColDef[];

export const componentConfig = {
  colDefs: <ColDefType>[
    { headerName: "Distillery Name", field: "name" },
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
  ],
  URL: "http://localhost:3001/api/distillery_data/",
};
