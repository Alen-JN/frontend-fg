import React from 'react'
import {
    AquaFarm,
    Footer,
    Header,
    Overview,
    Products,
    Tech,
    UseCase
  } from '../../containers'
  import {Navbar} from '../../components'

function Homepage() {
  return (
    <div>
        <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Overview/>
      <Products/>
      <Tech/>
      <UseCase/>
      <AquaFarm/>
      <Footer/>
    </div>
  )
}

export default Homepage