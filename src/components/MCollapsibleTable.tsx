import React, { useState } from "react";
import {
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

export interface MCollapsibleTableRow {
  [key: string]: any;
  expandableAttr?: { displayName: string; jsx: JSX.Element };
}

interface RowProps {
  row: MCollapsibleTableRow;
}

const Row = (props: RowProps) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        onClick={() => setOpen(!open)}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        {Object.keys(row).map((key) =>
          key === "expandableAttr" ? null : (
            <TableCell key={key}>{row[key]}</TableCell>
          )
        )}
      </TableRow>
      {row.expandableAttr && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  {row.expandableAttr.displayName}
                </Typography>
                {row.expandableAttr.jsx}
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

interface MCollapsibleTableProps {
  rows: MCollapsibleTableRow[];
  className?: string;
}

const MCollapsibleTable = (props: MCollapsibleTableProps) => {
  const { rows, className } = props;

  return (
    <TableContainer component={Paper} className={`m-table ${className}`}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {Object.keys(rows[0]).map((key) =>
              key === "expandableAttr" ? null : (
                <TableCell key={key}>{key}</TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <Row key={i} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MCollapsibleTable;
