import React from 'react'
import logo from './Images/logo.png'
import search from './Images/search.png'
import user from './Images/user.png'
import phone from './Images/phone.png'
import { NavLink } from 'react-router-dom'
import './css/Navbar.css'
const Navbar = () => {
    return (
        <>
            <header>
                <div className=' container container-flex'>
                    <div className='logo-container'>
                        <img src={logo} className='logo' />
                    </div>
                    <nav className='active'>
                    <div className='nav'>
                        <NavLink to="/" className="Nav-bar-link">Home</NavLink>
                        <NavLink to="/about" className="Nav-bar-link">About</NavLink>
                        <NavLink to="/services" className="Nav-bar-link">Services</NavLink>
                        <NavLink to="/contact" className="Nav-bar-link">Contact</NavLink>
                        <NavLink to="/policy" className="Nav-bar-link">Policy</NavLink>
                    </div>
                    </nav>
                     <div className='icons'>
                    <img src={search}className='icon'/>
                    <img src={user} className='icon'/>
                    <img src={phone}className='icon'/>
                    </div> 
                </div>
            </header>
        </>

    )
}

export default Navbar
