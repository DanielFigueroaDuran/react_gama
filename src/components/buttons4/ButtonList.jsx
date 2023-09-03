import React from 'react'

const ButtonList = ({num}) => {
  //console.log(num);
let newNum=[];
  for (let i = 0; i < num; i++) {
    console.log(i);
    i % 2==0 
    ? console.log("es par")
    : console.log("no es par");    
  }

    return (
    <div>ButtonList</div>
  )
}

export default ButtonList