import React from 'react'
import './services.css'
import ServItem from './ServItem'
import SpecialHeading  from '../special-heading/SpecialHeading'
function Services() {
  return (
    <div className='services'>
        <SpecialHeading 
        title="Services"
        text ="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,"
      />
      <div className='container'>
            <ServItem />
            <ServItem />
            <ServItem />
            <ServItem />

            
      </div>
    </div>
  )
}

export default Services
