import React from 'react'
import "./graphics.css"
import { dataGraphics } from "./graphicsData.js";
import GraphicsData from './GraphicsData.jsx';

const Graphics = () => {
    //console.log(dataGraphics);
    return (
        <>
            <div className='containerReact'>
                <div className='titleReact'>
                    <h1>30 Days Of React</h1>
                    <h2>World population</h2>
                    <span>ien most populated countries</span>
                </div>
                <div>
                    {dataGraphics.map((graphic, i) => <GraphicsData graphic={graphic} key={i} />)}
                </div>
            </div>
        </>
    )
}

export default Graphics