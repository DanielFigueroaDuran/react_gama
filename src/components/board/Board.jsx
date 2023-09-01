import { React, useState } from 'react'
import Square from '../square/Square'

const Board = () => {

    const [value, setValue] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        const newValues = value.slice(); // este me crea una copia delarray del estado
        newValues[i] = "x";
        setValue(newValues)
    }

    return (

        <div className='container'>
            <div className='board-row'>
                <Square value={value[0]} onSquare={() => handleClick(0)} />
                <Square value={value[1]} onSquare={() => handleClick(1)} />
                <Square value={value[2]} onSquare={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value={value[3]} onSquare={() => handleClick(3)} />
                <Square value={value[4]} onSquare={() => handleClick(4)} />
                <Square value={value[5]} onSquare={() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={value[6]} onSquare={() => handleClick(6)} />
                <Square value={value[7]} onSquare={() => handleClick(7)} />
                <Square value={value[8]} onSquare={() => handleClick(8)} />
            </div>
        </div>

    )
}

export default Board