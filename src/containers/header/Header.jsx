import React from 'react'
import './header.css'

function Header() {

  const videopath = require('../../media/random1.mp4')
  return (
    <div className='header section__padding'>
      <div className='header-content'>
        <h1> <span>Supercharge</span> you aquaculture business</h1>
        <p>Elevate your farm's productivity and boost ROI with our integrated farm management platform.</p>
        <div className='header-content_btn'>
          <button type='button' className='header-content_btn-1'>Request demo</button>
          <button type='button' className='header-content_btn-2'>Know more</button>
        </div>
      </div>
      <div className='header-media'>
        <video  controls>
          <source src={videopath} type='video/mp4' />
            Browser does not support video
        </video>
      </div>
    </div>
  )
}

export default Header