import { ValueFormatterParams, ValueGetterParams } from "ag-grid-community";
import { handleFilter } from "./handleFilter";

export interface IRow {
  [key: string]: string;
}

export const formatCurrency = (params: ValueFormatterParams) => {
  const formattedValue = params.value.toFixed(2);
  return formattedValue.endsWith(".00")
    ? `£${formattedValue.slice(0, -3)}`
    : `£${formattedValue}`;
};

export const convertStringToNumber = (fieldName: string) => {
  return (params: ValueGetterParams) => {
    const value = params.data[fieldName];
    return isNaN(value) ? null : parseInt(value);
  };
};

export const handleSearch = (
  event: React.ChangeEvent<HTMLInputElement>,
  fields: string[],
  data: IRow[],
  setSearchState: React.Dispatch<React.SetStateAction<string>>,
  setFilteredDataState: React.Dispatch<React.SetStateAction<IRow[]>>
) => {
  const value = event.target.value.toLowerCase();
  setSearchState(value);
  const filtered = handleFilter(data, value, fields);
  setFilteredDataState(filtered);
};

export const convertStringToSlug = (input: string): string => {
  const formattedString = input.toLowerCase().trim();
  const result = formattedString.replace(/\s+/g, "_");
  return result;
};
