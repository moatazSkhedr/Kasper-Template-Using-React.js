import React from 'react'
import './pricingItem.css';
function PricingItem({title , price}) {
  return (
    <div className='pricing-box'>
            <div className='head'>
                <h4>{title}</h4>
                <span>{price}</span>
            </div>
            
            <ul>
                <li>Feature No 1</li>
                <li>Extra Feature </li>
                <li>Extra Feature No 2</li>
                <li>Feature</li>
            </ul>
            <div className='foot'>
                <a href='#'>Buy Now</a>
            </div>

    </div>
  )
}

export default PricingItem
