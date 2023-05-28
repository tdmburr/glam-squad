// import React from 'react'
// import from 'react-router-dom'
import './Header.css'
import logo from '../../Assets/glam-logo.png'

const Header = () => {

  return (
    <header>
      <h1>
        <img src= {logo} id='header-logo' alt="Glam-Squad" />
        Glam-Squad
      </h1>        
    </header>
  )
}

export default Header
