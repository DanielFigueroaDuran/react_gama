import React from 'react'

const Square = ({ value, onSquare }) => {
    return (
        <button className="square" onClick={onSquare}>{value}</button>
    );
}

export default Square