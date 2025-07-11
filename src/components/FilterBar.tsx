import React, { useMemo } from 'react';
import { FilterDropdown } from './FilterDropdown';
import { useFilterContext } from '../context/FilterContext';
import { NumberRow } from '../types';
import { getAvailableFilterValues, filterRows } from '../utils/filterUtils';

interface FilterBarProps {
  rows: NumberRow[];
}

export const FilterBar: React.FC<FilterBarProps> = ({ rows }) => {
  const { filters, setFilters } = useFilterContext();

  // Compute filtered rows for inter-filter logic
  const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters]);

  // For each filter, show all possible values, but for other filters, restrict to filtered values
  const filterOptions = {
    mod3: getAvailableFilterValues(
      filterRows(rows, { ...filters, mod3: [] }),
      'mod3'
    ),
    mod4: getAvailableFilterValues(
      filterRows(rows, { ...filters, mod4: [] }),
      'mod4'
    ),
    mod5: getAvailableFilterValues(
      filterRows(rows, { ...filters, mod5: [] }),
      'mod5'
    ),
  };

  return (
    <div style={{ display: 'flex', marginBottom: 16 }}>
      {(['mod3', 'mod4', 'mod5'] as const).map(key => (
        <FilterDropdown
          key={key}
          label={key.toUpperCase()}
          options={filterOptions[key]}
          selected={filters[key]}
          onChange={selected => setFilters(prev => ({ ...prev, [key]: selected }))}
        />
      ))}
    </div>
  );
};
