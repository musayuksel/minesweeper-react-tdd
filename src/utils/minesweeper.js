export const boardWith = (chars) => Math.sqrt(chars.length);//N*N board

export const countMinesAroundCell = (board, currentCellIndex, boardWidth) => {
    const upCellIndex = currentCellIndex - boardWidth;
    const downCellIndex = currentCellIndex + boardWidth;
    const leftCellIndex = (currentIndex) => currentIndex % boardWidth === 0 ? undefined : currentIndex - 1;//prevent left edge
    const rightCellIndex = (currentIndex) => (currentIndex + 1) % boardWidth === 0 ? undefined : currentIndex + 1;//prevent right edge
    const upLeftCellIndex = leftCellIndex(upCellIndex);
    const upRightCellIndex = rightCellIndex(upCellIndex);
    const bottomLeftCellIndex = leftCellIndex(downCellIndex);
    const bottomRightCellIndex = rightCellIndex(downCellIndex);

    const aroundOfCell = [upCellIndex, downCellIndex, leftCellIndex, rightCellIndex, upLeftCellIndex, upRightCellIndex, bottomLeftCellIndex, bottomRightCellIndex];

    return aroundOfCell.reduce((counter, cell) => board[cell] === 'X' ? counter + 1 : counter, 0);
}



export function minesweeper(chars) {
    console.log('test');
}