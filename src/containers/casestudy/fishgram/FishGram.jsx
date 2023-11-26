import React from 'react'
import fishgram from '../../media/fishgram.svg'
function FishGram() {
  return (
    <div className='Fishgram'>
        <div className='fishgramicon'>
            <img src={fishgram} alt="image"/>
        </div>
        <div className='details'>
            <p>
            Through Fishgram-Aqua's assistance, Nishant Reddy was not only able to bridge the gap between traditional aquaculture and modern technology but also to unlock the untapped potential for productivity and operational excellence in his farms. Fishgram-Aqua's tailored solutions provided him with the tools to manage costs, enhance culture, and ultimately achieve greater success and sustainability in his aquaculture endeavors.

Still not convinced? Connect with us
            </p>
        </div>
    </div>
  )
}

export default FishGram