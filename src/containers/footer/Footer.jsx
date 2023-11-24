import './footer.css';
import React from 'react'

import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    
    <footer className="footer">
        <div className='foo'>
          <div className="footer-section1">
            <h1>LOGO</h1>
            <div className="footer-links">
              <a href="#">About us</a>
              <a href="#">Privacy</a>
              <a href="#">Terms & conditions</a>
              <a href="#">Contact Us</a>
            </div>
            <p>© 2023 Infifresh foods. All rights reserved.</p>
          </div>
          <div className="footer-section2">
          <div className='footer-section2-location'>
          <p>1st Floor, Uday Mansion, Koramangala Industrial <br />Layout, Koramangala, Bengaluru, Karnataka-560095</p>
        </div>
        <div className='footer_email'>
          <p>hello@captainfresh.in</p>
        </div>
            <div className="footer-icons">
            <div >
          <FaTwitter />
          </div>
          <div >
          <FaFacebookSquare />
          </div>
          <div >
          <FaLinkedinIn />
          </div>
          <div className='last-icon'>
          <FaYoutubeSquare />
          </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
export default Footer;





















// import React from 'react'

//   import { FaFacebookSquare } from "react-icons/fa"
//   import { FaTwitter } from "react-icons/fa";
//   import { FaYoutubeSquare } from "react-icons/fa";
//   import { FaLinkedinIn } from "react-icons/fa";
// function Footer() {
//   return (
//     <div className='Footer'>
//       <div className='Footer_left'>
//         <h1>LOGO</h1>
//         </div>
//         <div>
//         <p><a href="#Aboutus">About us</a></p>
//         <p><a href="#Privacy">Privacy</a></p>
//         <p><a href="#Terms & conditions">Terms & conditions</a></p>
//         <p><a href="#Contact us">Contact us</a></p>

//       </div>
//       <div className='Footer_right'>
//         <div className='Footer_right-location'>
//           <p>1st Floor, Uday Mansion, Koramangala Industrial Layout, Koramangala, Bengaluru, Karnataka-560095</p>
//         </div>
//         <div className='Footer_email'>
//           <p>hello@captainfresh.in</p>
//         </div>
//         <div className='Footer_media'>
//           <div >
//           <FaTwitter />
//           </div>
//           <div >
//           <FaFacebookSquare />
//           </div>
//           <div >
//           <FaLinkedinIn />
//           </div>
//           <div >
//           <FaYoutubeSquare />
//           </div>
          
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer