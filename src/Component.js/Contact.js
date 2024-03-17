import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/contact.css'

const Contact = () => {
  return (
    <div>
      <br/>
      <h1>Contact Us</h1>
      <form className='contact'>
        <div>
        <label htmlFor='name'>Name</label>
        <input type='text' placeholder='Enter your Name'/>
        </div>
        <div>
        <label htmlFor='name'>Email</label>
        <input type='email' placeholder='Enter your Email'/>
        </div>
        <div>
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Enter your Password'/>
        </div>
        <div>
        <label htmlFor='mobile'>Mobile</label>
        <input type='mobile' placeholder='Enter your Mobile'/>
        </div>
        <div className='btnBx'>
        <div className='btn'>
        <NavLink to="/" className="readmore">Submit</NavLink>
        </div>
        </div>
        
      </form>
    </div>
  )
}

export default Contact
