import React from 'react'
import "./UserCard.css"
import { peoples } from "./people.js";
import RatingStar from './RatingStar';

const UseCard = () => {
    //console.log(peoples);
    return (
        <div className='containerUserCard'>
            {peoples.map((people, i) => {
                return (
                    <div className='cardUser' key={i}>
                        <p className='name'>{people.name}</p>
                        <RatingStar star={people.rating} key={i}/>
                        <p>{people.gender}</p>
                        <p>{people.job}</p>
                        <p>{people.city}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default UseCard