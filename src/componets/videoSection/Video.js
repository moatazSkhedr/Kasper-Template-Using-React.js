import React from 'react';
import './video.css';
function Video() {
  return (
    <div className='video'>
     <video autoPlay muted loop>
        <source src='../../../images/awesome-video.mp4' />
     </video>
     <div className='text'>
        <h2>Supper Awesome Video Here</h2>
        <p>Its All You Need</p>
        <button>See More</button>
     </div>
    </div>
  )
}

export default Video
