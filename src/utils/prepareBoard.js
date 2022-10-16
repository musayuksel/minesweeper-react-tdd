export const prepareBoard = (width) => {
  const board = new Array(width * width).fill('-');
  let mines = 0;
  if (width <= 10) {
    //at least 10% of the board is mines
    mines = Math.ceil(board.length * 0.10);
  } else if (width <= 20) {
    //at least 15% of the board is mines
    mines = Math.ceil(board.length * 0.15);
  } else {
    //at least 25% of the board is mines
    mines = Math.ceil(board.length * 0.25);
  }
  const minesIndexes = [];
  while (minesIndexes.length < mines) {
    const randomIndex = Math.floor(Math.random() * board.length);
    if (!minesIndexes.includes(randomIndex)) {
      minesIndexes.push(randomIndex);
    }
  }

  minesIndexes.forEach((index) => {
    board[index] = 'X';
  });
  return board;
};
