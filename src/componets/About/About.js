import React from 'react'
import './about.css';
import SpecialHeading  from '../special-heading/SpecialHeading'
function About() {
  return (
    <div className='about'>
      <SpecialHeading 
      title="About Us"
      text = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />
      <div className='container'>
        <img src='../../../images/about (1).png' />
      </div> 
        
    </div>
  )
}

export default About
