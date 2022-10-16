import React from 'react'
import './Cell.style.css'

export default function Cell({ cell }) {

    return (
        <div className={`cell ${cell === 'X' ? 'mine' : ''}`}>{cell}</div>
    )
}
