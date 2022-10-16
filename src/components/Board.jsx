import React from 'react'
import { boardWith, minesweeper } from '../utils/minesweeper'
import { boardStyles } from './Board.styles';
import Cell from './Cell';

export default function Board({ currentBoard = [] }) {
  const boardWidth = boardWith(currentBoard);
  const minesweeperBoard = minesweeper(currentBoard);
  
  const board = minesweeperBoard.map((cell, index) => {
    return <Cell key={index} cell={cell} />
  });

  return (
    <section style={boardStyles(boardWidth)} className='boardContainer'>
      {board}
    </section>
  )
}
