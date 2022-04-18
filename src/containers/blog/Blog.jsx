import React from 'react'
import './blog.css';
import {Article} from'../../components/exporter1';
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'


const Blog = () => {
  return (
    <div className='blog' id='blog'>

       <h1 className='gradient_text'>A lot is happening, 
We are blogging about it.</h1>
          
        <div className='article-card'>

          <div className='first-div'>
           <Article imgURL={blog01} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} rfa={'Read full article'}/>
          </div>
          <div className='sec-div' >
            <Article imgURL={blog02} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} rfa={'Read full article'}/>
            <Article imgURL={blog03} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} rfa={'Read full article'}/>
            <Article imgURL={blog04} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} rfa={'Read full article'}/>
            <Article imgURL={blog05} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} rfa={'Read full article'}/>
          </div>

        </div>



    </div>
  )
}

export default Blog