import React from 'react'
import './buttons.css'




const ButtonList = ({ num }) => {

    let newNum = [];

    function primo(numero) {

        if (numero <= 1) {
            return false;
        }

        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }

        }

        return numero !== 1;
    }

    for (let i = 0; i <= num; i++) {
        if (primo(i)) {
            newNum.push(<button onClick={() => console.log(i)} key={i} className="btn btnCousins ">{i}</button>)
        } else {
            i % 2 === 0
                ? newNum.push(<button onClick={() => console.log(i)} key={i} className="btn btnPar ">{i}</button>)
                : newNum.push(<button onClick={() => console.log(i)} key={i} className="btn btnOdd ">{i}</button>);
        }
    }

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