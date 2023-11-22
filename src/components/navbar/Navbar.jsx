import React, { useState } from 'react'
import './navbar.css'

function Navbar() {

  const [togglemenu ,setTogglemenu] = useState(false)

  const Menu = () => {
    return (
      <>
      <p><a href='#overview'>Overview</a></p>
      <p><a href='#products'>Products</a></p>
      <p><a href='#tech'>Tech</a></p>
      <p><a href='#aquafarm'>Aquafarm Stories</a></p>
      </>
    )
  }

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          {/* add logo */}
          {/* <img  alt='logo' /> */}
          <p>Logo</p>
        </div>
        <div className='navbar-links_container'>
            <Menu/>
        </div>
        <div className='navbar-call'>
          <button>Schedule a call</button>
        </div>
        <div className='navbar-menu'>
          {/* add menu icon */}
        </div>
      </div>
    </div>
  )
}

export default Navbar