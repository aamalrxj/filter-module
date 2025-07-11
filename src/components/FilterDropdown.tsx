import React from 'react';
import { Checkbox, ListItemText, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface FilterDropdownProps {
  label: string;
  options: number[];
  selected: number[];
  onChange: (selected: number[]) => void;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  selected,
  onChange,
}) => {
  return (
    <FormControl sx={{ minWidth: 120, marginRight: 2 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={selected}
        onChange={e => onChange(e.target.value as number[])}
        renderValue={selected => selected.join(', ')}
        label={label}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={selected.includes(option)} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
