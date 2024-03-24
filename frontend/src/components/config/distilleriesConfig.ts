import { ColDef } from "ag-grid-community";
import customCellRenderer from "../../utils/customCellRenderer";
import { convertStringToNumber } from "../../utils/functions";

type ColDefType = ColDef[];

export const componentConfig = {
  colDefs: <ColDefType>[
    {
      headerName: "Distillery Name",
      field: "name",
      cellRenderer: customCellRenderer("slug", "/distilleries/", "name"),
    },
    { headerName: "Country", field: "country", filter: true },
    {
      headerName: "Whiskies",
      field: "whiskybase_whiskies",
      valueGetter: convertStringToNumber("whiskybase_whiskies"),
    },
    {
      headerName: "Votes",
      field: "whiskybase_votes",
      valueGetter: convertStringToNumber("whiskybase_votes"),
    },
    {
      headerName: "Rating",
      field: "whiskybase_rating",
      valueGetter: convertStringToNumber("whiskybase_rating"),
    },
  ],
  searchFields: ["name", "country"],
  placeHolder: "Search by name and country",
  URL: "http://localhost:3001/api/distilleries_info",
};
