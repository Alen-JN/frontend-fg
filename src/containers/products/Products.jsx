import React from 'react'
import photo1 from '../../media/Photo1.svg'
import photo2 from '../../media/Photo2.svg'
import './products.css';
function Products() {
  return (
    <div className='Products' id='products'>
      <div className='Ourporoduct_top'>
      <div className='ourproducts'>
        <p>OUR PRODUCTS</p>
      </div>
      <div className='ourproducts_description'>
        <p>One-Stop solution for 
lean aquaculture</p></div>
</div>
     <div className='Products_Main'>
     <div className='Products_Main-photo1'>
     <div className='Products_Main-text'>
     <h5>Farm Digitization Solution</h5>
     <p> Enable your workforce to carry out everyday operations efficiently.</p>
     </div>
     <div className='photo1'>
      <img src={photo1} alt="picture"/>
     </div>
     </div>
     <div className='Products_Main-photo2'>
     <div className='Products_Main-text2'>
     <h6>Farm Monitoring Solutionn</h6>
     <p> A centralized dashboard to keep track of operations and take informed decisions.</p>
     </div>
     <div className='photo2'>
      <img src={photo2} alt="picture"/>
     </div>
     </div>
      {/* // <img src={product1} alt="image not able to load"></img> */}
     
      </div>
      <div className='Product_footer'>
        <p>Interested in learning more? Get in touch with us to explore our apps.</p>
        <div>
          <button type="button">Request a demo</button>
        </div>

      </div>

    </div>
  )
}

export default Products