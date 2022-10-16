export const boardStyles = (boardWidth) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${boardWidth}, 1fr)`,
    gridGap: '1px',
    border: '1px solid black',
    width: '500px',
    height: '500px',
});

export const cellsStyles = (cell='') => ({
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    width: '100%',
    height: '100%',
    backgroundColor: cell === 'X' ? 'red' : 'white',
});