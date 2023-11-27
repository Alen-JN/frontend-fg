import React from 'react'
import './casestudypage.css'
import { Navbar } from '../../components'
import { 
    Casestudyheader,
    CasestudyIntro,
    PersonOverview,
    Fishgram,
    Testimonial, 
    Casestudychallenge,
    FishGramaqua} from '../casestudy'
import Footer from '../footer/Footer'

function Casestudypage() {
  return (
    <div className='casestudypage'>
        <div className='gradient__bg2'>
            <Navbar/>
            <Casestudyheader/>
        </div>
        <CasestudyIntro/>
        <PersonOverview/>
        <Casestudychallenge/>
        <FishGramaqua/>

        <Testimonial/>
        <Fishgram/>
       
        <Footer/>
    </div>
  )
}

export default Casestudypage