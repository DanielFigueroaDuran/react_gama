import React, { useState, useEffect } from 'react'
import "./pokeapi.css";
import Pokemon from './Pokemon';
import { cardCredit } from '../creditcard/cardData';
//import { getData } from "./getData.js";

const PokeApi = () => {
    const [pokemones, setPokemones] = useState([])

    const ApiUrl = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0 `;

    const getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        const newData = data.results;
        return newData
        //newData.slice(0,49).map((e)=>{console.log(e);})
        //setPokemones(newData);
        
        //const results = await Promise.all(response);
	//console.log(results);
	//return results
    }

    //  const data = getData(ApiUrl);
    //  console.log(data);

    //setPokemones(getData(ApiUrl));

    useEffect(()=>{
        getData(ApiUrl).then(data=>setPokemones(data));
    },[])
    
  
//console.log(pokemones);


    // const newPokemones = pokemones.slice(0, 50).map(e => console.log(e));

    // console.log(newPokemones);

    return (
        <div className='containeCard'>
            {pokemones.slice(0,49).map((pokemon,i)=><Pokemon cardPokemon={pokemon} key={i}/>)}
        </div>
    )
}

export default PokeApi