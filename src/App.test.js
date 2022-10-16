import { render, screen } from '@testing-library/react';
import App from './App';
import { boardWith } from './utils/minesweeper';

const board = [
  "-", "-", "-", "-", "-",
  "-", "-", "-", "-", "-",
  "X", "X", "-", "-", "-",
  "-", "-", "-", "-", "-",
  "-", "-", "-", "-", "X",
];
describe('Mine Sweeper', () => {
  it('should calculate the board width correctly', () => {
    const width = boardWith(board);
    expect(width).toBe(5);
  });
});
