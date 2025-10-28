import React from 'react'

const Card = () => {
    const user = "Ajna Lab"
    const age =10

  return (
      <>
      <div className ='card'>
        <h1> hello {user}</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, praesentium?
        </p>
        <p> Age: {age} </p>
      </div>
    </>
  )
}
export default Card
