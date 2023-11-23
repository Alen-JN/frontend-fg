import React from 'react'

function Header() {
  return (
    <div className='header section__padding'>
      <div className='header-content'>
        <h1 >Supercharge you aquaculture business</h1>
        <p>Elevate your farm's productivity and boost ROI with our integrated farm management platform.</p>
        <div className='header-content_buttons'>
          <button type='button'>Request demo</button>
          <button type='button'>Know more</button>
        </div>
      </div>
      <div className='header-media'>
        {/* video to be added */}
      </div>
    </div>
  )
}

export default Header