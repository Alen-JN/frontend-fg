import React from 'react'
import './overview.css'
import {Topic} from '../../components'
import img1 from '../../media/overview_img1.png'
import img2 from '../../media/overview_inc.png'
import img3 from '../../media/overview_img2.png'


function Overview() {
  return (
    <div className='overview section__padding'>
      <div className='overview-header'>
        <div className='overview-header_subheading'>
          <h4>OUR OFFERINGS</h4>
        </div>
        <div className='overview-header-heading-cover'> {/* div for center?*/} 
        <div className='overview-header-heading'>
          <h1>Harness the power of AI for aquaculture excellence</h1>
          <p>Experience real time farm insights and cutting-edge remote sensing capabilities</p>
        </div>
        </div>
      </div>
      <div className='overview-content'>
        <div className='overview-content_1'>
          <div className='overview-content_1-image'>
          <img src={img1} alt='image_1' />
          </div>
          <div className='overview-content_1-body'>
              <Topic title='Digitize your farm' text='Empower yourself with user-friendly tools to digitize your farm, streamline data management, and make your day-to-day farm tasks easier and more efficient. Explore a range of features:' />
              <ul>
                <li>
                Trace origin of seed and feed inputs
                </li>
                <li>
                Know feed consumption pattern
                </li>
                <li>
                Track farm productivity
                </li>
                <li>
                Manage pond risks
                </li>
                <li>
                Analyse root cause of risks
                </li>
              </ul>
          </div>
        </div>
        <div className='overview-content_2'>
          <div>
            <Topic title='Effortless Traceability' text='Secure end-to-end product traceability from seed to harvest, boosting consumer trust, ensuring quality compliance, and maintaining efficient farm operations.' />
            {/* sub */}
            <></>
          </div>
          <img src={img2} alt='image_2' />
        </div>
        <div className='overview-content_3'>
          <img src={img3} alt='image_3' />
          <div>
            <Topic title='Insights Made Simple' text="Discover valuable insights of your farm's performance with the help of remote sensing and analytics" />
            {/* sub */}
            <></>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className='overview-image'>
        <img></img>
      </div>
    </div>
  )
}

export default Overview