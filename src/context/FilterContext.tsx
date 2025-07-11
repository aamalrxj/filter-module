import React, { createContext, useContext, useState } from 'react';

type FilterState = {
  mod3: number[];
  mod4: number[];
  mod5: number[];
};

const defaultState: FilterState = {
  mod3: [],
  mod4: [],
  mod5: [],
};

const FilterContext = createContext<{
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}>({
  filters: defaultState,
  setFilters: () => {},
});

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<FilterState>(defaultState);
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
