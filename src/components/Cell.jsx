import React from 'react';
import { handleCellClick } from '../utils/handleCellClick';
import './Cell.style.css';
export default function Cell({ cell, setBoardCellsWithInfos, setIsGameOver,boardWidth }) {
  
  const handleClick = () => {
    handleCellClick(cell,setIsGameOver,setBoardCellsWithInfos,boardWidth);
  };

  const classes = 
     `cell ${
      !cell.isRevealed
        ? 'hidden'
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
    <div onClick={handleClick} className={classes}>
      {cell.isRevealed ? cell.value : '?'}
    </div>
  );
}
