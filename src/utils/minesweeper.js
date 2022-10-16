export const boardWith = (chars) => Math.sqrt(chars.length); //N*N board

export const upCellIndex = (currentCellIndex, boardWidth) =>
  currentCellIndex - boardWidth;

export const downCellIndex = (currentCellIndex, boardWidth) =>
  currentCellIndex + boardWidth;

export const leftCellIndex = (currentCellIndex, boardWidth) =>
  currentCellIndex % boardWidth === 0 ? undefined : currentCellIndex - 1; //prevent left edge

export const rightCellIndex = (currentCellIndex, boardWidth) =>
  (currentCellIndex + 1) % boardWidth === 0 ? undefined : currentCellIndex + 1; //prevent right edge

export const upLeftCellIndex = (currentCellIndex, boardWidth) => {
  const upCell = upCellIndex(currentCellIndex, boardWidth);
  return leftCellIndex(upCell, boardWidth);
};

export const upRightCellIndex = (currentCellIndex, boardWidth) => {
  const upCell = upCellIndex(currentCellIndex, boardWidth);
  return rightCellIndex(upCell, boardWidth);
};

export const downLeftCellIndex = (currentCellIndex, boardWidth) => {
  const downCell = downCellIndex(currentCellIndex, boardWidth);
  return leftCellIndex(downCell, boardWidth);
};

export const downRightCellIndex = (currentCellIndex, boardWidth) => {
  const downCell = downCellIndex(currentCellIndex, boardWidth);
  return rightCellIndex(downCell, boardWidth);
};

export const countMinesAroundCell = (board, currentCellIndex, boardWidth) => {
  const aroundOfCell = [
    upCellIndex(currentCellIndex, boardWidth),
    downCellIndex(currentCellIndex, boardWidth),
    leftCellIndex(currentCellIndex, boardWidth),
    rightCellIndex(currentCellIndex, boardWidth),
    upLeftCellIndex(currentCellIndex, boardWidth),
    upRightCellIndex(currentCellIndex, boardWidth),
    downLeftCellIndex(currentCellIndex, boardWidth),
    downRightCellIndex(currentCellIndex, boardWidth),
  ];

  const mineCounter = aroundOfCell.reduce(
    (counter, cell) => (board[cell] === 'X' ? counter + 1 : counter),
    0
  );
  return mineCounter.toString();
};

export const minesweeper = (chars) => {
  const boardWidth = boardWith(chars);
  return chars.map((char, index) =>
    char === 'X' ? char : countMinesAroundCell(chars, index, boardWidth)
  );
};
