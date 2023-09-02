import React from 'react'
import './CreditCard.css'
//import { DataCards } from './DataCards.jsx'



const CreditCard = ({ card }) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, cssClass } = card;
    //console.log(number);
    return (
        <div className=' cssClass card'>
            <p className='title'>{type}</p>
            <p className='number'>{number}</p>
            <div className='date'>
                <p>Expires: 0{expirationMonth} /</p>
                <p>{expirationYear}</p>
                <p>{bank}</p>
            </div>
            <p>{owner}</p>


        </div>
    )
}

export default CreditCard