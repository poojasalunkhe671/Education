import React from 'react'
import { NavLink } from 'react-router-dom'
import home from './Images/focus.jpg'
import './css/service.css'

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <div className='services'>
        <div className='cart'>
          <h2>Web Development</h2>
          <img src={home} className='img1' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, consectetur ex expedita officia sunt commodi sit iure iusto
            neque sequi nam mollitia totam voluptate maiores quaerat, exercitationem tempora eligendi quam.</p>
          <div className='btnBx'>
            <div className='btn'>
              <NavLink to="/about" className="readmore">Read more</NavLink>
            </div>
          </div>
        </div>


        <div className='cart'>
          <h2> Full Stack Development</h2>
          <img src={home} className='img1' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, consectetur ex expedita officia sunt commodi sit iure iusto
            neque sequi nam mollitia totam voluptate maiores quaerat, exercitationem tempora eligendi quam.</p>
          <div className='btnBx'>
            <div className='btn'>
              <NavLink to="/about" className="readmore">Read more</NavLink>
            </div>
          </div>
        </div>


        <div className='cart'>
          <h2>Front End Design</h2>
          <img src={home} className='img1' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, consectetur ex expedita officia sunt commodi sit iure iusto
            neque sequi nam mollitia totam voluptate maiores quaerat, exercitationem tempora eligendi quam.</p>
          <div className='btnBx'>
            <div className='btn'>
              <NavLink to="/about" className="readmore">Read more</NavLink>
            </div>
          </div>
        </div>
      </div>


      








    </div>







  )
}

export default Services
