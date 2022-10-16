import React from 'react';
import './Cell.style.css';

export default function Cell({ cell }) {
    const classes = `cell ${
      cell === 'X'
        ? 'bomb'
        : cell === '0'
        ? 'empty'
        : cell === '1'
        ? 'one'
        : cell === '2'
        ? 'two'
        : 'threeOrMore'
    }`;
    
    return <div className={classes}>{cell}</div>;
}
