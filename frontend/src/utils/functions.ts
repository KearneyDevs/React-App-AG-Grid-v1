import { ValueFormatterParams, ValueGetterParams } from "ag-grid-community";

export const formatCurrency = (params: ValueFormatterParams) => {
    return "£" + params.value.toLocaleString();
  };

export const convertStringToNumber = (fieldName: string) => {
    return (params: ValueGetterParams) => {
        const value = params.data[fieldName];
        return isNaN(value) ? null : parseInt(value);
    };
};