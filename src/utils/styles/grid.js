/* @flow */
const GRID = {
  columns: 12,
  gutterWidth: 30,
  columnWidth: 68,
}

export const grid = (cols: number, gutters: number = cols - 1) =>
  GRID.columnWidth * cols + GRID.gutterWidth * gutters
