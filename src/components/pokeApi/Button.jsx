import React from 'react'

const Button = ({name}) => {
    const handleClick = () => {
        console.log(name);
    }

  return (
    <button className='btn' onClick={()=>handleClick()}>Agregar</button>
  )
}

export default Button