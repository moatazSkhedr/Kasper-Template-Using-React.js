import React from 'react'
import './portfolio.css';
import SpecialHeading from '../special-heading/SpecialHeading'
function Portfolio() {
  return (
    <div className='portfolio'>
        <SpecialHeading
        title="PORTFOLIO"
        text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,"
      />
      <div className='container'>
        <ul>
            <li className='active'>All</li>
            <li>App</li>
            <li>Photo</li>
            <li>Web</li>
            <li>Print</li>
        </ul>
      </div>
      <div className='image-container'>
        <div className='box'>
            <img src='../../../images/shuffle-01.jpg'/>
            <div className='caption'>
                <h4>Awsome Image</h4>
                <p>Photography</p>
            </div>
        </div> 

        <div className='box'>
            <img src='../../../images/shuffle-02.jpg'/>
            <div className='caption'>
                <h4>Awsome Image</h4>
                <p>Photography</p>
            </div>
        </div>
         
        <div className='box'>
            <img src='../../../images/shuffle-03.jpg'/>
            <div className='caption'>
                <h4>Awsome Image</h4>
                <p>Photography</p>
            </div>
        </div>

        <div className='box'>
            <img src='../../../images/shuffle-04.jpg'/>
            <div className='caption'>
                <h4>Awsome Image</h4>
                <p>Photography</p>
            </div>
        </div> 


        <div className='box'>
            <img src='../../../images/shuffle-05.jpg'/>
            <div className='caption'>
                <h4>Awsome Image</h4>
                <p>Photography</p>
            </div>
        </div>

        <div className='box'>
            <img src='../../../images/shuffle-06.jpg'/>
            <div className='caption'>
                <h4>Awsome Image</h4>
                <p>Photography</p>
            </div>
        </div>
        <div className='box'>
            <img src='../../../images/shuffle-07.jpg'/>
            <div className='caption'>
                <h4>Awsome Image</h4>
                <p>Photography</p>
            </div>
        </div>

        <div className='box'>
            <img src='../../../images/shuffle-08.jpg'/>
            <div className='caption'>
                <h4>Awsome Image</h4>
                <p>Photography</p>
            </div>
        </div>
            
      </div>
      <a href='#'>More</a> 
    </div>

  )
}

export default Portfolio
