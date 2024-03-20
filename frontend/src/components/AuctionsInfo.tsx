import { useState, useEffect } from "react";
import AgDataGrid from "./general/AgDataGrid";
import { ColDef, ValueFormatterParams } from "ag-grid-community";

interface IRow {
  name: string;
  slug: string;
  url: string;
  buyers_fee: number;
  sellers_fee: number;
  reserve_fee: number;
  listing_fee: number;
  base_currency: string;
}

const AuctionsInfo = () => {
  const [rowData, setRowData] = useState<IRow[]>([]);
  const [colDefs, setColDefs] = useState<ColDef[]>([
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
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/api/auctions_info")
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
      <AgDataGrid colDefs={colDefs} rowData={rowData} pagination={false} />
    </div>
  );
};

export default AuctionsInfo;
