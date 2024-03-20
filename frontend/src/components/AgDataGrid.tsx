import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

interface AgDataGridProps {
  colDefs: any[]; // You can define a more specific type for colDefs if necessary
  rowData: any[]; // You can define a more specific type for rowData if necessary
}

const AgDataGrid: React.FC<AgDataGridProps> = ({ colDefs, rowData }) => {
  return (
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ width: "100%", height: "500px" }} // the grid will fill the size of the parent container
    >
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
