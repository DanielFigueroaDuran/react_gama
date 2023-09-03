import './App.css'
import Board from './components/board/Board'
import ButtonList from './components/buttons4/ButtonList';
import CreditCard from "./components/creditcard/CreditCard.jsx"
import { cardCredit } from "./components/creditcard/cardData.js";
import Rating from './components/linkedinShop/Rating';
import UseCard from './components/linkedinShop/UseCard';
import PokeApi from './components/pokeApi/PokeApi';


function App() {
    //console.log(cardCredit);

    return (
        <>

            <div >

                <Board />

                <div className='containerCard'>

                    {cardCredit.map((card, i) => <CreditCard card={card} key={i} />)}
                </div>

                {/* <div className='containerRating'>
                    <Rating />
                </div>

                <div>
                    <UseCard />
                </div> 
                <PokeApi />*/}

                <div className='containerButton'>
                    <ButtonList num={50}/>
                </div>
            </div>
        </>

    )
}

export default App
