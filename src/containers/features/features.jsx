import React from 'react'



function Features({image, title,text}) {
  return (
    <div className='Ourtech__feature'>
        <div className='Ourtech__feature-image'>
            <img src={image} alt="photo"></img>
        </div>
        <div className='Ourtech__feature-heading'>
            <h1>{title}</h1>
        </div>
        <div className='Ourtech__feature-heading-text'>
        {text}
        </div>
    </div>
  )
}

export default Features