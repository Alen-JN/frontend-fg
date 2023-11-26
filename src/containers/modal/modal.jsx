

import modal from '../../media/modal1.svg'
import React, { useState } from 'react';
import './modal.css'; // You can define your styles in a separate CSS file
const Modal = ({isOpen,closeModal}) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  const handleSubmit = () => {
    // Add your form submission logic here
    // For example, you can collect form data and perform any necessary actions
    // Then close the modal
    closeModal();
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
           
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
            
            <div className="modal-content">
              <div className="left-section">
                {/* Add your image here */}
                <img
                  src={modal}
                  alt="Sample Image"
                />
              </div>
              <div className="right-section">
                <h2>Let's Connect...</h2>
                <form>
                <label
htmlFor='name'>Name</label>

          
<input
type='text'
id='companyname'
name='companyname'
required />     
<label
htmlFor='name'>Company Name</label>

          
<input
type='text'
id='designation'
name='name'
required />
<label
htmlFor='name'>Designation</label>

          
<input
type='text'
id='name'
name='name'
required /> 
<label
htmlFor='email'>Email:</label>
<input
type='email'
id='email'
name='email'
required />   
      <label htmlFor="mobile">Mobile No</label>
<input type="tel" id="mobile" name="mobile" required />
<label
htmlFor='message'>Message</label>
<textarea
id='message'
name='message' rows='5' required></textarea>

                  <div className="modal-buttons">
                    
                    <button type="button" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default Modal;

// import React from 'react'

// const Modal = ({ showModal, handleCloseModal }) => {
//   return (
//     <div className='modal'>
//       <div className='modal-content'>
//         <h2>Request a Demo</h2>

        
// <form>    
// <label
// htmlFor='name'>Name</label>

          
// <input
// type='text'
// id='companyname'
// name='companyname'
// required />     
// <label
// htmlFor='name'>Company Name</label>

          
// <input
// type='text'
// id='designation'
// name='name'
// required />
// <label
// htmlFor='name'>Designation</label>

          
// <input
// type='text'
// id='name'
// name='name'
// required /> 
// <label
// htmlFor='email'>Email:</label>
// <input
// type='email'
// id='email'
// name='email'
// required />   
//       <label htmlFor="mobile">Mobile No</label>
// <input type="tel" id="mobile" name="mobile" required />
// <label
// htmlFor='message'>Message</label>
// <textarea
// id='message'
// name='message' rows='5' required></textarea>
//           <button type='submit'>Submit</button>
//         </form>
//         <button className='modal-close-btn' onClick={handleCloseModal}>
//           X
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Modal