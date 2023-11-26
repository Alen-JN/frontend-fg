import React from 'react'
import './casestudypage.css'
import { Navbar } from '../../components'
import { 
    Casestudyheader,
    CasestudyIntro,
    PersonOverview,
    Fishgram,
    Testimonial } from '../casestudy'

function Casestudypage() {
  return (
    <div className='casestudypage'>
        <div className='gradient__bg'>
            <Navbar/>
                <Casestudyheader/>
        </div>
        <CasestudyIntro/>
        <PersonOverview/>


        <Fishgram/>
        <Testimonial/>

    </div>
  )
}

export default Casestudypage