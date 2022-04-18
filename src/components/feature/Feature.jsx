import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='feature'>
      <div className='gpt3_feature_title'>
        <div/>
        <h2 className='h2-title'>{title}</h2>
      </div>
      
      <div className='div-text'>{text}</div>
     
    </div>
  )
}

export default Feature