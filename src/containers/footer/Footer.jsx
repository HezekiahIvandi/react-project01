import React from 'react'
import './footer.css'
const Contacts = ({title,a, b,c,d})=>(
  <>
        <div>
            <p>{title}</p>
            <p>{a}</p>
            <p>{b}</p>
            <p>{c}</p>
            <p>{d}</p>
        </div>
  </>
)


const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-text'>
        <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>

      <div className='footer-middle'>
        <div>
          <h3>GPT-3</h3>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <Contacts title="Links" a="Overons" b= "Social Media" c="Counters" d="Contact"/>
        <Contacts title="Company" a="Terms & Conditions" b="Privacy Policy" c="Contact"/>
        <Contacts title="Get in touch" a="Crechterwoord K12 182 DK Alknjkcb" b= "085-132567" c="info@payme.net"/>
      </div>

      <p className='copyright'>© 2021 GPT-3. All rights reserved.</p>

    </div>
  )
}

export default Footer