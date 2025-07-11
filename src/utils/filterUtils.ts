import { NumberRow } from '../types';

export function filterRows(
  rows: NumberRow[],
  filters: { [key: string]: number[] }
): NumberRow[] {
  return rows.filter(row =>
    Object.entries(filters).every(
      ([key, values]) => values.length === 0 || values.includes((row as any)[key])
    )
  );
}

export function getAvailableFilterValues(
  rows: NumberRow[],
  column: keyof NumberRow
): number[] {
  return Array.from(new Set(rows.map(row => row[column]))).sort((a, b) => a - b);
}
