import { ValueGetterParams } from "ag-grid-community";
import AnchorTo from "../components/general/AnchorTo";

const customCellRenderer = (fieldName: string, url: string, fieldReadName: string) => {
    return (params: ValueGetterParams) => {
        return <AnchorTo url={`${url}${params.data[fieldName]}`} value={params.data[fieldReadName]} />;
    };
};

export default customCellRenderer;