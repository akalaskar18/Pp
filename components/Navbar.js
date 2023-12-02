import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../src/pic/LogoW.png'
import me from '../../src/pic/icons8-chat-message-32.png'
import {Link} from 'react-scroll';
import menu from '../../src/pic/menu.png'

import insta from '../pic/insta.png'
import linkdin from '../pic/linkdin.png'
import twitter from '../pic/twitter.png'
import git from '../pic/git.png'


const Navbar = () => {
  const [showMenu ,setShowMenu]= useState(false);

  const redirectToInstagram = () => {
    // Replace 'YOUR_INSTAGRAM_URL' with the actual URL of your Instagram profile
    const instagramUrl = 'https://www.instagram.com/a_s_h_i_s_h____k_a_l_a_s_k_a_r/';
    window.open(instagramUrl, '_blank');
  };

  const redirectToLinkdin = () => {
    // Replace 'YOUR_INSTAGRAM_URL' with the actual URL of your Instagram profile
    const instagramUrll = 'https://in.linkedin.com/in/ashish-kalaskar-858281230?trk=people-guest_people_search-card';
    window.open(instagramUrll, '_blank');
  };

  const redirectTotwitter = () => {
    // Replace 'YOUR_INSTAGRAM_URL' with the actual URL of your Instagram profile
    const instagramUrlt = 'https://twitter.com/i/flow/login?redirect_after_login=%2Fashish_kalaskar';
    window.open(instagramUrlt, '_blank');
  };

  const redirectToGit = () => {
    // Replace 'YOUR_INSTAGRAM_URL' with the actual URL of your Instagram profile
    const instagramUrlg = 'https://github.com/akalaskar18/New';
    window.open(instagramUrlg, '_blank');
  };

  return (
    <div className="navbar">
      <img src={logo} alt='LOGO' className='LOGO'></img>
      <div className='Menu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='MenuList'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-78} duration={500} className='MenuList'>Aboute</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-78} duration={500} className='MenuList'>Portfolio</Link>
            <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-78} duration={500} className='MenuList'>Resume</Link>
      </div>


      <div className='Icon'>
      <div className="instagramn" onClick={redirectToInstagram}>
      {/* Your logo content */}
      <img src={insta} alt='instagram' className='instagramn'></img>
    </div>
      
    <div className="instagramn" onClick={redirectToLinkdin}>
      {/* Your logo content */}
      <img src={linkdin} alt='linkdin' className='linkdinn'></img>
    </div>
    
    <div className="instagramn" onClick={redirectTotwitter}>
      {/* Your logo content */}
      <img src={twitter} alt='twitter' className='twittern'></img>
    </div>


    <div className="instagramn" onClick={redirectToGit}>
      {/* Your logo content */}
      <img src={git} alt='git' className='gitn'></img>
      </div>
   
      <button  className='MenuButton' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'})
      }}>
        <img src={me} height={20}></img>
        Contact Me
      </button>
      </div>

      <img src={menu} alt='menu' className='mobmenu' onClick={()=>setShowMenu(!showMenu)}></img>
      <div className="navMenu" style={{display:showMenu ?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitom' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-78} duration={500} className='listitom' onClick={()=>setShowMenu(false)}>Aboute</Link>
            <Link activeClass='active' to='Portfolio' spy={true} smooth={true} offset={-78} duration={500} className='listitom' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-78} duration={500} className='listitom' onClick={()=>setShowMenu(false)}>Resume</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-78} duration={500} className='listitom' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>

      

    </div>
    
    
  )
}

export default Navbar;
