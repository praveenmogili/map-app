import React from "react";
import { DataGrid } from "@mui/x-data-grid";

interface MTableProps {
  rows: any[];
  columns: any[];
  pageSize: number;
  rowsPerPageOptions: number[];
  checkboxSelection: boolean;
}

const MTable = (props: MTableProps) => {
  const { rows, columns, pageSize, rowsPerPageOptions, checkboxSelection } =
    props;

  return (
    <div className="mtable">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        checkboxSelection={checkboxSelection}
      />
    </div>
  );
};

export default MTable;
