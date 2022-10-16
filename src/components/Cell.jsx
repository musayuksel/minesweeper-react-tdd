import React from 'react';
import './Cell.style.css';

export default function Cell({ cell, isGameOver, setIsGameOver }) {
  const [isRevealed, setIsRevealed] = React.useState(isGameOver || false);

  React.useEffect(() => {
    setIsRevealed(isGameOver);
  }, [isGameOver]);

  const handleClick = () => {
    if (cell === 'X') {
      setIsGameOver(true);
    }
    setIsRevealed(true);
  };
  const classes = `cell ${
    !isRevealed
      ? 'hidden'
      : cell === 'X'
      ? 'bomb'
      : cell === '0'
      ? 'empty'
      : cell === '1'
      ? 'one'
      : cell === '2'
      ? 'two'
      : 'threeOrMore'
  }`;

  return (
    <div onClick={handleClick} className={classes}>
      {isRevealed ? cell : '?'}
    </div>
  );
}
