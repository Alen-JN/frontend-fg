import React from 'react'
import './heading.css'

function Heading({subtitle, title, text}) {
  return (
    <div>
        <div className='hd-subheading'>
          <h4>{subtitle}</h4>
        </div>
        <div className='hd-heading_cover'> {/* div for center?*/} 
        <div className='hd-heading'>
          <h1>{title} </h1>
          <p>{text} </p>
        </div>
        </div>
    </div>
  )
}

export default Heading