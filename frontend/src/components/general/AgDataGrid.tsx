import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

interface AgDataGridProps {
  colDefs: any[];
  rowData: any[];
  pagination: boolean;
}

const AgDataGrid: React.FC<AgDataGridProps> = ({
  colDefs,
  rowData,
  pagination,
}) => {
  return (
    <div className="ag-theme-quartz mb-10 w-full">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        pagination={pagination}
        domLayout={"autoHeight"}
        paginationPageSize={20}
        paginationPageSizeSelector={[10, 20, 50, 100]}
      />
    </div>
  );
};

export default AgDataGrid;
