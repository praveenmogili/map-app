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
          key === "expandableAttr" ? null : <TableCell>{row[key]}</TableCell>
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

const defRows = [
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    price: 3.99,
    expandableAttr: {
      displayName: "history",
      jsx: (
        <>
          <b>Customer</b>: John Smith
          <br />
        </>
      ),
    },
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    price: 4.99,
    expandableAttr: {
      displayName: "history",
      jsx: (
        <>
          <b>Customer</b>: John Smith
          <br />
        </>
      ),
    },
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
    price: 3.79,
    expandableAttr: {
      displayName: "history",
      jsx: (
        <>
          <b>Customer</b>: John Smith
          <br />
        </>
      ),
    },
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    price: 2.5,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    price: 1.5,
  },
];

interface MCollapsibleTableProps {
  rows: MCollapsibleTableRow[];
}

const MCollapsibleTable = (props: MCollapsibleTableProps) => {
  const { rows = defRows } = props;

  return (
    <TableContainer component={Paper} className="m-table">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {Object.keys(rows[0]).map((key) =>
              key === "expandableAttr" ? null : <TableCell>{key}</TableCell>
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
