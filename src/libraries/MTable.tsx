import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { MTABLE_DEF_WIDTH } from "../assets/constants";

interface MTableProps {
  rows: object[];
  columns?: DataGridColumn[];
  pageSize?: number;
  rowsPerPageOptions?: number[];
  checkboxSelection?: boolean;
}

interface DataGridColumn {
  field: string;
  headerName: string;
  width: number;
  type?: string;
  sortable?: boolean;
}

const MTable = (props: MTableProps) => {
  const {
    rows,
    columns = [],
    pageSize = 5,
    rowsPerPageOptions = [5],
    checkboxSelection = false,
  } = props;

  // fill out columns if not provided
  if (columns.length === 0 && rows.length > 0) {
    const headerTitles = Object.keys(rows[0]);
    headerTitles.forEach((title) => {
      columns.push({
        field: title,
        headerName: title,
        width: MTABLE_DEF_WIDTH,
        type: typeof rows[0][title as keyof typeof rows[0]],
        sortable: true,
      });
    });
  }

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
