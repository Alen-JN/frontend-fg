import React from 'react'
import person from '../../media/person.svg'
function PersonOverview() {
  return (
    <div className='Personoverview'>
        <div className='Overview'>
            <div className='personPhoto'>
                <img src ={person} alt="picture"/>
            </div>
            <div className='persondescription'>
         <p>Persona Overview</p>
         <h5>Nishant Reddy - The Visionary Aquaculturist</h5>
         <div className='personbrief'>
            <p>
            Nishant Reddy, a prominent 29-year-old figure in the aquaculture community of Andhra, specifically in the Nellore and Ongole regions, has dedicated the past decade to nurturing his family's aquaculture farming, with a special focus on shrimp cultivation. 

With a growing portfolio, Nishant now oversees and owns more than ten farms, collectively spanning hundreds of acres, where he employs both extensive and intensive techniques to cultivate Vanamei shrimp. Nishant's expertise doesn't stop at his family's farms; he also serves as a consultant and manager for aquaculture ventures, leveraging his proven aquaculture practices to deliver higher productivity in shrimp farming.
            </p>
         </div>

            </div>
        </div>
    </div>
  )
}

export default PersonOverview