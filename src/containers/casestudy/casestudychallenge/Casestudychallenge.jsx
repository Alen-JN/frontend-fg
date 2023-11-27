import React from 'react'
import './casestudychallenge.css'
import { Heading } from '../../../components'
import img1 from '../../../media/challenge1.png'
import img2 from '../../../media/challenge2.png'


function Casestudychallenge() {
  return (
    <div className='challenge section__padding'>
        <div className="challenge-header">
          <Heading
            subtitle="THE CHALLENGE"
            title="Lack of Customization and Traceability"
            text="Nishant's remarkable success was undeniable, but he couldn't shake the feeling that untapped potential lay just beyond his grasp. His main pain points revolved around the lack of traceability, impacting both the cost and culture of his aquaculture operations"
          />
        </div>
        <div className='challenge-content'>
            <div className='challenge-content_1'>
                <div className='challenge-content_1-img'>
                    <img src={img1} alt='one' />
                </div>
                <div className='challenge-content_1-body'>
                    <h4>Cost Management</h4>
                    <p>The absence of traceability meant that vital cost factors, such as feed, seed, and operational expenses, were not precisely measured at the farm or pond level. Questions loomed in his mind:</p>
                    <ul>
                        <li>How much feed do I need each month? </li>
                        <li>What's the monthly cost of operating aerators? </li>
                        <li>How much do I spend on stocking per pond?</li>
                        <li>What are the operational costs for each pond?</li>
                    </ul>
                </div>
            </div>
            <div className='challenge-content_2'>
            <div className='challenge-content_2-body'>
                    <h4>Cultivation Challenges</h4>
                    <p>The absence of traceability also meant that essential key performance indicators (KPIs) related to pond health and productivity remained elusive, hindering timely corrective actions. Nishant pondered:</p>
                    <ul>
                        <li>What's the feed conversion ratio over time?  </li>
                        <li>Why is productivity lower in a specific pond?  </li>
                        <li>How do the growth trends differ across the ponds?</li>
                        <li>What's causing high mortality rates?</li>
                    </ul>
                </div>
                <div className='challenge-content_2-img'>
                    <img src={img2} alt='two' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Casestudychallenge