import React from 'react'
import "./Rating.css";
import RatingStar from './RatingStar';

const Rating = () => {

    let stars = [0, 1, 2, 3, 4,5];

        return (
        <div className='rating'>
            {stars.map((star, id)=> <RatingStar star={star} key={id}  />)}           
        </div>
    )
}

export default Rating