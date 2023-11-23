import React, { useState } from 'react'
import './navbar.css'
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri'


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
          {togglemenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setTogglemenu(false)}></RiCloseLine>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setTogglemenu(true)}>  </RiMenu3Line>
          }
          {
          togglemenu && (
            <div className='navbar-menu_container scale-up-center ' >
              <div className='navbar-menu_container-links'>
                <Menu />
                <div className='navbar-menu_container-links-call'>
                <button type='button'>Schedule a call</button>
                </div>
              </div>
            </div>
          )}
         
        </div>
      </div>
    </div>
  )
}

export default Navbar