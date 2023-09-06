import React from 'react'
import './graphics.css'

const GraphicsData = ({ graphic }) => {
    //console.log(graphic);

    const { country, population } = graphic;

    return (
        <div className='containerGraphics' >
            <div className='country'>{country.toUpperCase()}</div>
            <div className='percentage'>
            </div>
            <div className='population'>{population}</div>
        </div>

    )
}

export default GraphicsData