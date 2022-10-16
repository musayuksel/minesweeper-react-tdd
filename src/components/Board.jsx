import React from 'react';
import { boardWith, minesweeper } from '../utils/minesweeper';
import { boardStyles } from './Board.styles';
import Cell from './Cell';

export default function Board({ currentBoard, resetBoard }) {
  const boardWidth = boardWith(currentBoard);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [boardCellsWithInfos, setBoardCellsWithInfos] = React.useState([]);
  const [isGameWon, setIsGameWon] = React.useState(true);

  React.useEffect(() => {
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
    const isGameWon = boardCellsWithInfos.every((cell) => {
      if (cell.value === 'X') return true;
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
      {isGameOver && (
        <section>
          <button onClick={handleSameBoardClick}>
            Game Over! Same board again?
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
      {isGameWon && !isGameOver && (
        <section>
          <button
            onClick={() => {
              resetBoard();
              setIsGameWon(false);
            }}
          >
            New Game
          </button>
        </section>
      )}
      <section style={boardStyles(boardWidth)} className='boardContainer'>
        {board}
      </section>
    </>
  );
}
