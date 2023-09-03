import React, { useState } from 'react'

const PokeApi = () => {
    const [pokemones, setPokemones] = useState([])
    

    const ApiUrl = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0 `;

    const getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        const newData = data.results;
        return newData; 
        //setPokemones(newData);
    }

    getData(ApiUrl);

    
    // const newPokemones = pokemones.slice(0, 50).map(e => console.log(e));
    
    // console.log(newPokemones);

    return (
        <div>
            {/* {pokemones.slice(0,49).map(e =>console.log(e))} */}
        </div>
    )
}

export default PokeApi