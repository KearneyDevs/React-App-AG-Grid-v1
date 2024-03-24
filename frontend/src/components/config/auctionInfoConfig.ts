import { ColDef } from "ag-grid-community";
import { formatCurrency } from "../../utils/functions";
import { ValueFormatterParams } from "ag-grid-community";

type ColDefType = ColDef[];

export const componentConfig = {
  colDefs: <ColDefType>[
    { headerName: "Auction Name", field: "name" },
    {
      headerName: "Buyers Fee",
      field: "buyers_fee",
      valueFormatter: (params: ValueFormatterParams) => {
        return "£" + params.value.toLocaleString();
      },
    },
    {
      headerName: "Sellers Fee",
      field: "sellers_fee",
      valueFormatter: (params: ValueFormatterParams) => {
        return "£" + params.value.toLocaleString();
      },
    },
    {
      headerName: "Reserve Fee",
      field: "reserve_fee",
      valueFormatter: (params: ValueFormatterParams) => {
        return "£" + params.value.toLocaleString();
      },
    },
    {
      headerName: "Listing Fee",
      field: "listing_fee",
      valueFormatter: (params: ValueFormatterParams) => {
        return "£" + params.value.toLocaleString();
      },
    },
    { headerName: "Currency", field: "base_currency" },
  ],
  URL: "http://localhost:3001/api/auction_info/",
};
