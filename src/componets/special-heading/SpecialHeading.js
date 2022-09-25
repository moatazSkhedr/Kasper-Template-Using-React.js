import React from 'react'
import './specialHeading.css'
import "../../App.css";
function SpecialHeading({title ,text }) {
  return (
    
    <div className='special-headin'>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>

 

  )
}

export default SpecialHeading
