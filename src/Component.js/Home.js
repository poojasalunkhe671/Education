import React from 'react'
import {NavLink} from 'react-router-dom'
import home from './Images/focus.jpg'
import './css/homeAbout.css'
const Home = () => {
  return (
    
      <div className='main'>
        <div className='content'>
          <h1>Learning made easy</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         A sunt maxime iusto odit tempora porro, veniam ipsum et ipsa tenetur!
      </p>
      <div className='btnBx'>
        <div className='btn'>
        <NavLink to="/about" className="readmore">Read more</NavLink>
        </div>
        </div>
       
      </div>
      <div className='img'>
          <img src={home}/>
        </div>
      </div>
     
    
  )
}

export default Home
