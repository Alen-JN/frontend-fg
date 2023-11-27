import React from 'react'
import {
    AquaFarm,
    Footer,
    Header,
    Overview,
    Products,
    Tech,
    UseCase,
    Schedulecall
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
      <Schedulecall/>
      <Footer/>
    </div>
  )
}

export default Homepage