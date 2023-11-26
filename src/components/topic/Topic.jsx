import React from 'react'
import './topic.css'

function Topic({title, text}) {
  return (
    <div className='topic'>
        <div className='topic-header'>
            <h3>{title}</h3>
        </div>
        <div className='topic-text'>
            <p>{text}</p>
        </div>
        <div className='topic-line'>
            <hr></hr>
        </div>
    </div>
  )
}

export default Topic