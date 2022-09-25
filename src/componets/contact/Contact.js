import React from 'react'
import "./contact.css";
import SpecialHeading from '../../componets/special-heading/SpecialHeading'
function Contact() {
  return (
    <div className='contact'>
        <SpecialHeading 
        title="CONTACT US"
        text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        "
        />
        <div className='container'>
          <form action='' >
            <input type="text" placeholder ="Your Name "/>
            <input type="emial" placeholder = "Your Email" />
            <textarea placeholder='Your Message'></textarea>
            <div className='sen-mesg'>
            Send Message
          </div>

          </form>
          <div className='right-side'>
          <div className='text-box'>
            <h3>Get In Touch</h3>
            <div className='number'>
            <span>+00 123.456.796</span>
            <span>+00 123.456.796</span>

            </div>
          </div>
          <div className='text-box'>
            <h3>WHERE WE ARE</h3>
            <div className='number'>
            <span>AWSOME ADDRESS 17</span>
            <span>00 123.456.796</span>
            <span>USA</span>

            </div>
          </div>

          </div>

        </div>
    </div>
  )
}

export default Contact
