import React from 'react'
import "./pokeapi.css";

const Pokemon = ({ cardPokemon }) => {
    //console.log(cardPokemon);
    //const{name,url}=cardPokemon;
    return (
        <div className='cardPokeapi'>
            <p>{cardPokemon.name}</p>
            <img src={cardPokemon.url} alt="" />
        </div>
    )
}

export default Pokemon