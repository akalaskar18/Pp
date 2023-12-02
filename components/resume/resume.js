import React from 'react'
import resume from './resume.css'
import re from '../../pic/Resume.jpg'
import Downlode from '../../pic/Darro.png'
import rd from '../../pic/Ashish K..pdf'

const Resume = () => {
  return (
    <section id='resume'>
        <div className='no1'>
        <h1 className='myresume'>My Resume</h1>
      <img src={re} alt='Resume' className='Rimage'></img>

      <a href='E:/ins/instagram-clone/src/pic/Ashish K..pdf' download={{rd}}>
      <button className='Downlode' > <img src={Downlode} className='Dimage'></img>Downlode</button>

      </a>
        </div>

    </section>
  )
}

export default Resume
