import React from 'react';
import './article.css';

const Article = ({imgURL, date, rfa, title}) => {
  return (
    <div className='article'>
      <img src={imgURL}/>
      <div className='article-text'>
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{rfa}</p>
      </div>
    </div>
  )
}

export default Article