import React from 'react'
import intro from './intro.css'
import im from '../../pic/pass.png'
import bc from '../../pic/Briefcase Emoji.png'
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    
  <section id="intro">
    <div className='introcontent'>
      <span className='hello' >Hello,</span>
      <span className='introtext'>I am <span className='name'>Ashish</span> </span>
      <p className='intp'>a seasoned full stack developer dedicated to bringing digital visions 
      to life. With a passion for crafting seamless and innovative web experiences, I possess a diverse 
      skill set that spans both the front-end and back-end realms of web development..</p>
      <Link><button className='hm'><img src={bc} alt='bc' height={14}></img> Hire Mi</button></Link>
    </div>
    <div className='image'>
    <img src={im} alt='profile' className='bagimg'></img>
    </div>
  </section>
  )
}

export default Intro
