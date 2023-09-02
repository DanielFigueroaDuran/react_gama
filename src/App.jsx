import './App.css'
import Board from './components/board/Board'
import CreditCard from "./components/creditcard/CreditCard.jsx"
import { cardCredit } from "./components/creditcard/cardData.js";
import Rating from './components/linkedinShop/Rating';

function App() {
    //console.log(cardCredit);

    return (
        <>
            <div className='container'>
                <div className='containerCard'>
                    {/* <Board /> */}

                    {cardCredit.map((card, i) => <CreditCard card={card} key={i} />)}
                </div>

                <div className='containerRating'>
                    <Rating />
                </div>
            </div>
        </>

    )
}

export default App
