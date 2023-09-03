import React from 'react'
import "./pokeapi.css";
import Button from './Button';

const Pokemon = ({ cardPokemon }) => {
    //console.log(cardPokemon);
    //const{name,url}=cardPokemon;
    return (
        <div className='cardPokeapi'>
            <p>{cardPokemon.name}</p>
            <img src={cardPokemon.url} alt="" />
            <Button name={cardPokemon.name}/>
        </div>
    )
}

export default Pokemon