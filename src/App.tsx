import React, { useMemo, useState } from 'react';
import { generateNumberRows } from './utils/dataGenerator';
import { FilterProvider, useFilterContext } from './context/FilterContext';
import { FilterBar } from './components/FilterBar';
import { DataTable } from './components/DataTable';
import { filterRows } from './utils/filterUtils';
import { SearchBar } from './components/SearchBar';

const TOTAL_ROWS = 1000;
const PAGE_SIZE = 100;

const AppContent: React.FC = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const { filters } = useFilterContext();

  const allRows = useMemo(() => generateNumberRows(TOTAL_ROWS), []);
  const filteredRows = useMemo(
    () =>
      filterRows(
        allRows.filter(
          row =>
            !search ||
            Object.values(row).some(val =>
              val.toString().includes(search)
            )
        ),
        filters
      ),
    [allRows, filters, search]
  );

  // Reset to first page if filteredRows change
  React.useEffect(() => {
    setPage(0);
  }, [filteredRows.length]);

  return (
    <div style={{ padding: 32 }}>
      <h1>Modulo Filter Table</h1>
      <SearchBar value={search} onChange={setSearch} />
      <FilterBar rows={allRows} />
      <DataTable
        rows={filteredRows}
        page={page}
        pageSize={PAGE_SIZE}
        onPageChange={setPage}
      />
    </div>
  );
};

const App: React.FC = () => (
  <FilterProvider>
    <AppContent />
  </FilterProvider>
);

export default App;
