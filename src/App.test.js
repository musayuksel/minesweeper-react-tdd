import { render, screen } from '@testing-library/react';
import App from './App';
import { boardWith, countMinesAroundCell, minesweeper } from './utils/minesweeper';

const board = [
  "-", "-", "-", "-", "-",
  "-", "-", "-", "-", "-",
  "X", "X", "-", "-", "-",
  "-", "-", "-", "-", "-",
  "-", "-", "-", "-", "X",
];
const expectedBoard = [
  "0", "0", "0", "0", "0",
  "2", "2", "1", "0", "0",
  "X", "X", "1", "0", "0",
  "2", "2", "1", "1", "1",
  "0", "0", "0", "1", "X", 
]

describe('Mine Sweeper', () => {
  it('should calculate the board width correctly', () => {
    const width = boardWith(board);
    expect(width).toBe(5);
  });

  it('should correctly count the mines around the cell', () => {
    const topLeftCorner = countMinesAroundCell(board, 0, 5);
    expect(topLeftCorner).toBe('0');

    const secondRowLeftCorner = countMinesAroundCell(board, 5, 5);
    expect(secondRowLeftCorner).toBe('2');

    const topRightCorner = countMinesAroundCell(board, 4, 5);
    expect(topRightCorner).toBe('0');

    const forthRowRightCorner = countMinesAroundCell(board, 19, 5);
    expect(forthRowRightCorner).toBe('1');
  });

  it('should render the board correctly', () => {
    const boardResult = minesweeper(board);
    expect(boardResult).toEqual(expectedBoard);
  });

});
