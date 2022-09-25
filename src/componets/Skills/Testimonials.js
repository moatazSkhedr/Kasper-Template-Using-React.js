import React from 'react'
import "./testimonials.css"
function Testimonials() {
  return (
    <div className='testimonials'>
      <h3>testimonials</h3>

      <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble

</p>

    <div className='box'>
        <img src='../../../images/skills-01.jpg' />

        <div className='text'>
            <p >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <p className='name'>John Doe ,CEO</p>
        </div>
    </div>
    <div className='box'>
        <img src='../../../images/skills-01.jpg' />
        <div className='text'>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <p className='name'>John Doe ,CEO</p>
        </div>
    </div>
    <ul className='bulits'>
        <li></li>
        <li className='active'></li>
        <li></li>
    </ul>

    </div>
  )
}

export default Testimonials
