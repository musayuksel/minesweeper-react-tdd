import React from 'react'
import { boardWith, minesweeper } from '../utils/minesweeper'
import { boardStyles } from './Board.styles';
import Cell from './Cell';

export default function Board({ currentBoard ,resetBoard }) {
  const boardWidth = boardWith(currentBoard);
  const minesweeperBoard = minesweeper(currentBoard);
  const [isGameOver, setIsGameOver] = React.useState(false);
  
  const board = minesweeperBoard.map((cell, index) => {
    return <Cell isGameOver={isGameOver} setIsGameOver={setIsGameOver} key={index} cell={cell} />
  });

  return (
    <>
      {isGameOver && 
      <>
      <h2>:(</h2>
      <button onClick={()=>setIsGameOver(false)}>Try again with the same board</button>
      <button onClick={()=>{resetBoard();  setIsGameOver(false)}}>Try again with a new board</button>
      </>
      }
    <section style={boardStyles(boardWidth)} className='boardContainer'>
      {board}
    </section>
    </>
  )
}
