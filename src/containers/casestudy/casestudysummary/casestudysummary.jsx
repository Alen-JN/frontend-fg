import React from 'react'
import summaryphoto from '../../../media/pondsummary.svg'
import summarydetails from '../../../media/Harvestdetails.svg'
function casestudysummary() {
  return (
    <div className='summary'>
        <div className='summaryimage'>
            <img src={summaryphoto} alt="image"/>
        </div>
        <div className='summarydetails'>
            <h5>Summary</h5>
        <img src={summarydetails} alt="image"/>
        </div>
      
    </div>
  )
}

export default casestudysummary