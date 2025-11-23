import React from 'react'

const Card = (props) => {
    console.log(props.user, props.age);
  return (
    <div>
       <div className='card'>
        <img src={props.img} alt="profile"/> 
      <h1> {props.user}, {props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing el</p>
    <button className ='button' >View Profile </button>
    </div>
    </div>
  )
}

export default Card
