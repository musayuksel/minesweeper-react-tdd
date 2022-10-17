import React from 'react';
import { boardWith, minesweeper } from '../utils/minesweeper';
import { boardStyles } from './Board.styles';
import Cell from './Cell';
import {BsEmojiSunglasses,BsEmojiSmile} from 'react-icons/bs';
import {FaRegSadTear} from 'react-icons/fa';

export default function Board({ currentBoard, resetBoard }) {
  const boardWidth = boardWith(currentBoard);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [boardCellsWithInfos, setBoardCellsWithInfos] = React.useState([]);
  const [isGameWon, setIsGameWon] = React.useState(false);

  React.useEffect(() => {
    setIsGameOver(false);
    setIsGameWon(false);
    setBoardCellsWithInfos(
      minesweeper(currentBoard).map((cell, index) => ({
        value: cell,
        isRevealed: false,
        index,
      }))
    );
  }, [currentBoard]);

  React.useEffect(() => {
    //  after every click check if the game is won
    const isGameWon =boardCellsWithInfos.every((cell) => {
      if (cell.value === 'X' && !cell.isRevealed) return true;
      return cell.value !== 'X' && cell.isRevealed;
    });

    setIsGameWon(isGameWon);
  }, [boardCellsWithInfos]);

 
  const board = boardCellsWithInfos.map((cell, index) => {
    return (
      <Cell
        setIsGameOver={setIsGameOver}
        key={index}
        cell={cell}
        setBoardCellsWithInfos={setBoardCellsWithInfos}
        boardWidth={boardWidth}
        isGameWon={isGameWon}
        isGameOver={isGameOver}
      />
    );
  });

  function handleSameBoardClick() {
    setBoardCellsWithInfos((prev) =>
      prev.map((cell) => ({ ...cell, isRevealed: false }))
    );
    setIsGameOver(false);
  }
  return (
    <>
    {!isGameOver && !isGameWon && <h3><BsEmojiSmile/></h3>}
      {isGameOver && (
        <section>
          <button onClick={handleSameBoardClick}>
          <FaRegSadTear/> Same board again?
          </button>
          <button
            onClick={() => {
              resetBoard();
              setIsGameOver(false);
            }}
          >
            New Game
          </button>
        </section>
      )}
      {(currentBoard.length>0 && isGameWon && !isGameOver) && (
        <section>
          <button
            onClick={() => {
              resetBoard();
              setIsGameWon(false);
            }}
            >
            <BsEmojiSunglasses/>
            <BsEmojiSunglasses/>
            <BsEmojiSunglasses/>
          </button>
        </section>
      )}
      <section style={boardStyles(boardWidth)} className='boardContainer'>
        {board}
      </section>
    </>
  );
}
