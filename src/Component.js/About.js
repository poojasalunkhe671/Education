import React from 'react'
import {NavLink} from 'react-router-dom'
import abt from './Images/ImgAbt.jpg'
import './css/homeAbout.css'

const About = () => {
  return (
    <div>
      <div className='main'>
        <div className='content'>
          <h1>Learning made easy</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, consectetur ex expedita officia sunt commodi sit iure iusto
         neque sequi nam mollitia totam voluptate maiores quaerat, exercitationem tempora eligendi quam.
      </p>
      
       
      </div>
      <div className='img'>
          <img src={abt}/>
        </div>
      </div>
     
    </div>
  )
}

export default About
