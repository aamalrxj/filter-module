import React from 'react';
import { NumberRow } from '../types';
import { FixedSizeList as List } from 'react-window';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
} from '@mui/material';

interface DataTableProps {
  rows: NumberRow[];
  page: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
}

const VISIBLE_COUNT = 20;
const ITEM_SIZE = 35;

export const DataTable: React.FC<DataTableProps> = ({
  rows,
  page,
  pageSize,
  onPageChange,
}) => {
  const pageRows = rows.slice(page * pageSize, (page + 1) * pageSize);

  // Custom row renderer for react-window
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const row = pageRows[index];
    return (
      <TableRow key={row.number} style={style}>
        <TableCell>{row.number}</TableCell>
        <TableCell>{row.mod3}</TableCell>
        <TableCell>{row.mod4}</TableCell>
        <TableCell>{row.mod5}</TableCell>
      </TableRow>
    );
  };

  return (
    <div>
      <TableContainer component={Paper} style={{ maxHeight: VISIBLE_COUNT * ITEM_SIZE + 56 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>mod 3</TableCell>
              <TableCell>mod 4</TableCell>
              <TableCell>mod 5</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <List
              height={VISIBLE_COUNT * ITEM_SIZE}
              itemCount={pageRows.length}
              itemSize={ITEM_SIZE}
              width="100%"
              outerElementType={React.forwardRef<HTMLTableSectionElement>((props, ref) => (
                <tbody {...props} ref={ref as React.RefObject<HTMLTableSectionElement>} />
              ))}
            >
              {Row}
            </List>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: 16 }}>
        <button
          onClick={() => onPageChange(Math.max(0, page - 1))}
          disabled={page === 0}
        >
          Previous
        </button>
        <span style={{ margin: '0 8px' }}>
          Page {page + 1} of {Math.ceil(rows.length / pageSize)}
        </span>
        <button
          onClick={() =>
            onPageChange(
              Math.min(page + 1, Math.ceil(rows.length / pageSize) - 1)
            )
          }
          disabled={page >= Math.ceil(rows.length / pageSize) - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};
