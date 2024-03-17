import React from 'react'
import twiter from './Images/twitter.png'
import insta from './Images/instagram.png'
import Linkedin from './Images/linkedin.png'
import './css/Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className='container container-flex'>

<div className='icons'>
                    <img src={twiter}className='icon'/>
                    <img src={insta} className='icon'/>
                    <img src={Linkedin}className='icon'/>
                    </div> 
                    <div className='line'>
                        <hr/>
                        <hr/>
                    </div>
                    <div className='copyright'>
                        <p>All rights reserved &copy;</p>
                        <p>Right to Educate</p>
                    </div>
</div>
  
    </footer>
  )
}

export default Footer
