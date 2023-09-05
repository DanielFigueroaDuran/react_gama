import React from 'react'
import { cardCredit } from "./cardData.js";
import CreditCard from './CreditCard.jsx';

export const DataCards = () => {
    //console.log(cardCredit)

    // cardCredit.map((card, i) => console.log(card.type) );

    return (
        <div className='containerCard'>
            {cardCredit.map((card, i) => <CreditCard card={card} key={i} />)}
        </div>

    )
}
