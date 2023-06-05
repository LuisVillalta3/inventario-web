import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type DataTableProps = {
  columns: GridColDef[];
  rows: any[];
  defaultPageSize?: number;
  defaultPage?: number;
  pageSizeOptions?: number[];
};

const DataTable: React.FC<DataTableProps> = ({
  columns,
  rows,
  defaultPageSize,
  defaultPage,
  pageSizeOptions,
}) => (
  <div style={{ background: "#fff", borderRadius: 4 }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: defaultPage, pageSize: defaultPageSize },
        },
      }}
      pageSizeOptions={pageSizeOptions}
      checkboxSelection
      disableColumnMenu
      disableColumnFilter
    />
  </div>
);

DataTable.defaultProps = {
  defaultPageSize: 5,
  defaultPage: 0,
  pageSizeOptions: [5, 10],
};

export default DataTable;
