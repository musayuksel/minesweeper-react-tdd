import React from 'react'
import { boardWith, minesweeper } from '../utils/minesweeper'
import { boardStyles,cellsStyles } from './Board.styles';

export default function Board({ currentBoard = [] }) {
  const boardWidth = boardWith(currentBoard);
  const minesweeperBoard = minesweeper(currentBoard);
  const board = minesweeperBoard.map((cell, index) => {
    return <div key={index} style={cellsStyles('')} className="cell">{cell}</div>
  });
  
  return (
    <section style={boardStyles(boardWidth)} className='boardContainer'>
      {board}
    </section>
  )
}
