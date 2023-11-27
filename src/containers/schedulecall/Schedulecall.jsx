import React from 'react'
import './schedulecall.css'
import Image from '../../media/service.svg'
const Schedulecall = () => {
  return (
    <section className="section-container">
        <div className='wrap-container'>
      <div className="left-section">
        <div className="text-content-wrapper">
        <div className='text-content'>
        <h1>Let's Get Going - Reach Out <br /> Today</h1>
        <p>
          Are you eager to experience what our services has to offer?<br /> Feel free to get in touch with our demo and convery your <br />requirements.
        </p>
        <button>Schedule a Call</button>
        </div>
      </div>
      </div>
      <div className="right-section">
        <img src={Image} alt="Image of harvest field"/>
      </div>
      </div>
     
     </section>
    
  )
}
export default Schedulecall






