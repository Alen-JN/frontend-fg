import React, { useState } from 'react'
import './header.css'
import Modal from '../modal/modal'
function Header() {

  const videopath = require('../../media/random1.mp4')
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const [showModal, setShowModal] = useState(false);

  // const handleRequestDemo = () => {
  //   setShowModal(true)
  // }

  // const handleCloseModal = () => {
  //   setShowModal(false)
  // }
  return (
    <div className='header section__padding'>
      <div className='header-content'>
        <h1> <span>Supercharge</span> you aquaculture business</h1>
        <p>Elevate your farm's productivity and boost ROI with our integrated farm management platform.</p>
        <div className='header-content_btn'>
        <button type='button' className='header-content_btn-1' onClick={openModal}>
            Request Demo
          </button>
          {isOpen && <Modal isOpen={isOpen} closeModal={closeModal} />}

          {/* {showModal && <Modal showModal={showModal} handleCloseModal={handleCloseModal} />} */}
          <button type='button' className='header-content_btn-2'>Know more</button>
        </div>
      </div>
      <div className='header-media'>
        <video  controls>
          <source src={videopath} type='video/mp4' />
            Browser does not support video
        </video>
      </div>
    </div>
  )
}

export default Header