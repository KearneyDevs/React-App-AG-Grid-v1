import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

interface AgDataGridProps {
  colDefs: any[];
  rowData: any[];
}

const AgDataGrid: React.FC<AgDataGridProps> = ({ colDefs, rowData }) => {
  return (
    <div className="ag-theme-quartz" style={{ width: "100%", height: "500px" }}>
      {rowData && rowData.length > 0 ? (
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      ) : (
        <div style={{ textAlign: "center", paddingTop: "20px" }}>
          No data available
        </div>
      )}
    </div>
  );
};

export default AgDataGrid;
