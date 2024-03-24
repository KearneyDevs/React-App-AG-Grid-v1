import { ColDef } from "ag-grid-community";
import { formatCurrency } from "../../utils/functions";

type ColDefType = ColDef[];

export const componentConfig = {
  colDefs: <ColDefType>[
    { headerName: "Auction Name", field: "name" },
    {
      headerName: "Buyers Fee",
      field: "buyers_fee",
      valueFormatter: formatCurrency,
    },
    {
      headerName: "Sellers Fee",
      field: "sellers_fee",
      valueFormatter: formatCurrency,
    },
    {
      headerName: "Reserve Fee",
      field: "reserve_fee",
      valueFormatter: formatCurrency,
    },
    {
      headerName: "Listing Fee",
      field: "listing_fee",
      valueFormatter: formatCurrency,
    },
    { headerName: "Currency", field: "base_currency" },
  ],
  URL: "http://localhost:3001/api/auctions_info/",
};
