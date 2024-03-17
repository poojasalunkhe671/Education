import React from 'react'
import{BrowserRouter,Route,Routes}from 'react-router-dom'
import Home from './Component.js/Home'
import About from './Component.js/About'
import Services from './Component.js/Services'
import Contact from './Component.js/Contact'
import Policy from './Component.js/Policy'
import Navbar from './Component.js/Navbar'
import Footer from './Component.js/Footer'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     
     <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/services"element={<Services/>}/>
      <Route path="/Contact"element={<Contact/>}/>
      <Route path="/Policy"element={<Policy/>}/>
      <Route path="/*"element={<h4>Page not found</h4>}/>
     </Routes>
    <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
