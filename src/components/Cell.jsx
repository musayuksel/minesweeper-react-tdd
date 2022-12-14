import React from 'react';
import { handleCellClick } from '../utils/handleCellClick';
import './Cell.style.css';
export default function Cell({ cell, setBoardCellsWithInfos, setIsGameOver,boardWidth,isGameWon,isGameOver }) {
  
  const handleClick = () => {
    handleCellClick(cell,setIsGameOver,setBoardCellsWithInfos,boardWidth);
  };

  const classes = 
     `cell ${
      !cell.isRevealed && !isGameOver && !isGameWon
        ? 'hidden'
        : cell.value === 'X'  && isGameWon && !isGameOver
        ? 'bomb won'
        : cell.value === 'X'
        ? 'bomb'
        : cell.value === '0'
        ? 'empty'
        : cell.value === '1'
        ? 'one'
        : cell.value === '2'
        ? 'two'
        : 'threeOrMore'
    }`;
    
  return (
    <div data-testid={'board-cell'} onClick={handleClick} className={classes}>
      {cell.isRevealed ? cell.value : '?'}
    </div>
  );
}
