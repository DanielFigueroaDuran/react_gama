import React from 'react'

const Square = ({ value, onSquare }) => {
    return (
        <button className="square" onClick={onSquare}>{value ? 'X' : 'O'}</button>
    );
}

export default Square