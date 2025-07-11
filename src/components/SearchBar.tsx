import React from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <TextField
    label="Search"
    variant="outlined"
    value={value}
    onChange={e => onChange(e.target.value)}
    style={{ marginBottom: 16, width: 200 }}
  />
);
