import React from 'react'
import harvestdetails from '../../../media/Harvestdetails.svg'
import  harvestimage from '../../../media/Harvestimage.svg'
function casestudyHarvest() {
  return (
    <div className='Harvest'>
        <div className='Harvest-photo'>
            <img src={harvestimage} alt="image"/>
        </div>
        <div className='Hravest-details'>
            <h6>Harvest</h6>
            <img src={harvestdetails} alt="image"/>
        </div>
    </div>
  )
}

export default casestudyHarvest