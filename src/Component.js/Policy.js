
import React from 'react'
import './css/policy.css'
import policy from './Images/policy.jpg'


const Policy = () => {
  return (
    <div>
      <br/>
      <h1>Privacy Policy</h1>
      <div className='policyimg'>
        <img src={policy}/>
      </div>
      <div className='policyList'>
        <ol>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Suscipit sit porro odio aliquid vitae ipsa facilis nesciunt, ea molestias consequatur!</li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Suscipit sit porro odio aliquid vitae ipsa facilis nesciunt, ea molestias consequatur!</li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Suscipit sit porro odio aliquid vitae ipsa facilis nesciunt, ea molestias consequatur!</li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Suscipit sit porro odio aliquid vitae ipsa facilis nesciunt, ea molestias consequatur!</li>
        </ol>
      </div>
    </div>
  )
}

export default Policy
