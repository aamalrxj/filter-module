Modulo Filter Table
A React + TypeScript demo app that displays a table of numbers with dynamic, Amazon-style filter dropdowns based on modulo attributes. Includes pagination, virtualized scrolling, and a global search.

Features
Dynamic filters: Filter by modulo 3, 4, and 5; filter options update based on selections.
Pagination: 100 rows per page.
Virtualized scrolling: Only 20 rows are rendered at a time for performance.
Global search: Quickly search across all columns.
Modern stack: React, TypeScript, Material-UI, react-window.

Getting Started
1. Install dependencies
bash
npm install
2. Start the development server
bash
npm start
The app will be available at http://localhost:3000.

Project Structure
src/components/ — UI components
src/context/ — React context for filter state
src/utils/ — Data generation and filtering utilities
src/types/ — TypeScript types

Scripts
npm start — Run the app in development mode
npm run build — Build for production
npm test — Run tests
