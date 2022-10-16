import {
  upCellIndex,
  downCellIndex,
  leftCellIndex,
  rightCellIndex,
  upLeftCellIndex,
  upRightCellIndex,
  downLeftCellIndex,
  downRightCellIndex,
} from './minesweeper';

export function handleCellClick(
  cell,
  setIsGameOver,
  setBoardCellsWithInfos,
  boardWidth
) {
  if (cell.value === 'X') {
    setIsGameOver(true);
    setBoardCellsWithInfos((prev) =>
      prev.map((cell) => ({ ...cell, isRevealed: true }))
    );
  } else if (cell.value === '0') {
    // reveal all cells around
    const currentCellIndex = cell.index;
    const aroundOfCell = [
      currentCellIndex,
      upCellIndex(currentCellIndex, boardWidth),
      downCellIndex(currentCellIndex, boardWidth),
      leftCellIndex(currentCellIndex, boardWidth),
      rightCellIndex(currentCellIndex, boardWidth),
      upLeftCellIndex(currentCellIndex, boardWidth),
      upRightCellIndex(currentCellIndex, boardWidth),
      downLeftCellIndex(currentCellIndex, boardWidth),
      downRightCellIndex(currentCellIndex, boardWidth),
    ];

    setBoardCellsWithInfos((prev) =>
      prev.map((cell) => {
        if (aroundOfCell.includes(cell.index)) {
          return { ...cell, isRevealed: true };
        }
        return cell;
      })
    );
  } else {
    setBoardCellsWithInfos((prev) => {
      const updatedBoard = [...prev];
      updatedBoard[cell.index].isRevealed = true;
      return updatedBoard;
    });
  }
}
