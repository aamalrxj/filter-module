import { NumberRow } from '../types';

export function generateNumberRows(count: number): NumberRow[] {
  return Array.from({ length: count }, (_, i) => {
    const number = i + 1;
    return {
      number,
      mod3: number % 3,
      mod4: number % 4,
      mod5: number % 5,
    };
  });
}
