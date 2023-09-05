import React from 'react'
import './buttons.css'

const ButtonList = ({ num }) => {

    let newNum = [];


    for (let i = 0; i < num; i++) {
        //console.log(i);
        if (num <= 1) return false;
        for (let j = 0; j <= Math.sqrt(num); j++) {
            if (num % i === 0) {
                newNum.push(<button className='btn btnCousins' key={i}>{j}</button>)
            }



        }
        // ? newNum.push(<button className='btn btnCousins' key={i}>{i}</button>)
        // : i % 2 === 0
        //     ? newNum.push(<button className='btn btnPar' key={i}>{i}</button>)
        //     : newNum.push(<button className='btn btnOdd' key={i}>{i}</button>);
    }

    console.log(newNum);

    return (
        <>
            <div className='containerReact'>
                <div className='titleReact'>
                    <h1>30 Days Of React</h1>
                    <h2>Number Generator</h2>
                </div>
                <div className='containerNum'>{newNum}</div>
            </div>
        </>
    )
}

export default ButtonList