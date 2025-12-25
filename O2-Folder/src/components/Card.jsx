import React from 'react'

const Card = (props) => {
  const name  = props.name;
  const age = props.age;
  return (
    <div className='card'>
      <h2>Hi {name}</h2>
      <p>Your age is {age}</p>

      
    </div>
  )
}

export default Card
