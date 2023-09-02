import './App.css'
import Board from './components/board/Board'
import CreditCard from './components/creditcard/CreditCard'
import { cardCredit } from "./components/creditcard/cardData.js";

function App() {
//console.log(cardCredit);

    return (
        <div className='container'>
            {/* <Board /> */}
           
       {cardCredit.map((card, i) => <CreditCard card={card} key={i} />)} 

            
        </div>
    )
}

export default App
