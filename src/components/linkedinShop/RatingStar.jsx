import React from 'react'
import "./Rating.css";

const RatingStar = ({star}) => {

  // console.log(star);

  //let stars = [0, 1, 2, 3, 4, 5];

  let newStar = [];
  //let ratingUser = [];

  for (let i = 0; i < 5; i++) {   
  
    star <= i
      ? newStar.push(<i className="fa-regular fa-star"></i>)
      : newStar.push(<i className="fa-solid fa-star"></i>)

  }


  // console.log(newStar);
  return (
    <div className='row'>
      <p>{newStar}</p>
    </div>
  )
}

export default RatingStar