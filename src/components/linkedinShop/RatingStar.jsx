import React from 'react'

const RatingStar = ({star}) => {

    //console.log(star);
        //     <i className="fa-solid fa-star"></i>
    //     <i className="fa-regular fa-star"></i>
    
    let newStar=[];

    for (let j = 0; j < 5; j++) {
         //newStar.push(i)
        star<= j 
        ? newStar.push(<i className="fa-regular fa-star"></i>)
        : newStar.push(<i className="fa-solid fa-star"></i>)
    
    }
    //console.log(newStar);
  return (
    <div>{newStar}</div>
  )
}

export default RatingStar