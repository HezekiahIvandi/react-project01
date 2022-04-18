import React from 'react';
import "./brand.css";
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';





const Brand = () => {
  return (
    <div className='gpt3_brand'>

     <div><img className="google" src={google}/><img src={slack}/></div>
     
     <div><img src={atlassian}/><img className='dropbox' src={dropbox}/></div>
     
     <div className='shop_div'> <img  className='shopify' src={shopify}/></div>

    </div>
  )
}

export default Brand