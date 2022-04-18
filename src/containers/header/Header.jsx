import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3_header' id='home'>

       <div className='gpt3_header_firsthalf'>
          <h1 className='gpt3_header_h1'>
            Let's Build Something amazing with GPT-3 OpenAI
          </h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. 
            Not thoughts all exercise blessing. Indulgence way
            everything joy alteration boisterous the attachment. 
            Party we years to order allow asked of.
          </p>
          
          <input type="email" placeholder="Your Email Addresss"/> <button>Get Started</button>
          
          <div className='gpt3_header_testimony'><img src={people}/><p>1,600 people requested access a visit in last 24 hours</p></div>
       </div>
      
      <div className='gpt3_header_secondhalf'>
        <img src={ai}/>
      </div>


    </div>
  )
}

export default Header