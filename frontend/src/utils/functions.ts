import { ValueFormatterParams, ValueGetterParams } from "ag-grid-community";

export const formatCurrency = (params: ValueFormatterParams) => {
    const formattedValue = params.value.toFixed(2);
    return formattedValue.endsWith('.00') ? `£${formattedValue.slice(0, -3)}` : `£${formattedValue}`;
    };

export const convertStringToNumber = (fieldName: string) => {
    return (params: ValueGetterParams) => {
        const value = params.data[fieldName];
        return isNaN(value) ? null : parseInt(value);
    };
};