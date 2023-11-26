import React from 'react'
import Features from '../features/features'
import './tech.css';
import { Heading } from '../../components';

function Tech() {
  return (
    <div className="Tech">

    <div className="subtech">
      {/* <div className="ourtech">
        <h4>OUR TECH</h4>
         

      <div className="Techheading">
        <div className='Techheading1'>
           <p>Explore our satellite <br/>remote sensing capabilities </p>
         
        </div>
      <div className='Techheading2'>
         <p>Discover a wealth of benefits from our technology empowering your aquaculture business at scale </p>
        </div>
         </div>
         </div> */}

      <div className='tech-header'>
        <Heading subtitle='OUR TECH' title='Explore our satellite remote sensing capabilities' text='Discover a wealth of benefits from our technology empowering your aquaculture business at scale ' />
      </div>

         <div className="TechPhoto">
          {/* want to add image */}
         <Features  title="Pond boundary delineation" text="Enables efficient classification, monitoring and management of ponds, optimizing for use of land and water resources sustainably. Applied at scale globally to estimate production volumes."/>
         <Features title ="Shrimp pond monitoring" text="Enables real-time tracking of key parameters such as water quality, temperature, stocking density etc. enhancing overall productivity & cost-effectiveness in aquaculture operations."/>
         <Features title ="Global supply & demand predictions" text="Stay ahead with data-driven insights, forecasting market conditions, enabling more informed decisions on when to buy or sell based on anticipated shifts in supply and demand."/>
    </div>
    </div>
    </div>
   
  )
}

export default Tech