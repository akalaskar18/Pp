import React, { useRef } from 'react'
import contact from './contac.css'
import insta from '../../pic/insta.png'
import linkdin from '../../pic/linkdin.png'
import twitter from '../../pic/twitter.png'
import git from '../../pic/git.png'
import emailjs from '@emailjs/browser';

function Contac() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r6zcqem', 'template_o2ebi7k', form.current, 'sveZVzkdy13cE-IZI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
    <div className='D1'>
      <h1 className='CM'>Contact Me</h1>
      <p className='con'>please fill out the form below to connect with me</p>

      <form className='contactform' ref={form} onSubmit={sendEmail}>
        <input type='text' className='nam' placeholder='Your Name' name='your_name'></input>
        <br></br>
        <input type='email' className='email' placeholder='Your Email' name='your_email'></input>
        <br></br>
        <textarea name='message'rows={5} placeholder='Your Message' className='MSG'></textarea>
        <br></br>
        <button type='submit' value='Send' className='subbutt'>Submite</button>
        <div className='links'>
            
        </div>
        
      </form>
      <div className='Icon'>
        <img src={insta} alt='instagram' className='instagram'></img>
        <img src={linkdin} alt='linkdin' className='linkdin'></img>
        <img src={twitter} alt='twitter' className='twitter'></img>
        <img src={git} alt='git' className='git'></img>
      </div>
    </div>
    </section>
  )
}

export default Contac
