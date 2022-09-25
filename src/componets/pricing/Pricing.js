import React from 'react'
import './pricing.css';
import  SpecialHeading from '../../componets/special-heading/SpecialHeading'
import PricingItem from './PricingItem';
function Pricing() {
  return (
    <div className='pricing'>
        <SpecialHeading
        title= " PRICING " 
        text = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book "
        />
        <div className='container'>
            <div className='box'>
            <PricingItem 
            title="BASIC"
            price ="19"
            />
            </div>
            <div className='box'>
            <PricingItem
                        title="PREMIUM"
                        price ="29"
            
             />
            </div>
            <div className='box'>
            <PricingItem
                        title="PRO"
                        price ="39"
            
            />
            </div>
            <div className='box'>
            <PricingItem 
                        title="PLATINUM"
                        price ="49"
            
            />
            </div>

        </div>

    </div>
  )
}

export default Pricing
