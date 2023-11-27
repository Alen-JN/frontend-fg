import React from "react";
import photo1 from "../../media/Photo1.svg";
import photo2 from "../../media/Photo2.svg";
import "./products.css";
import { Heading } from "../../components";

function Products() {
  return (

    <div className="Products section__padding" id="products">
      <div className="Ourporoduct_top">
        <div className="ourproducts-header">
          <Heading
            subtitle="OUR PRODUCTS"
            title="One-Stop solution for lean aquaculture"
            text=""
          />
        </div>

        <div className="Products_Main">
          <div className="Products_Main-photo1">
            <div className="Products_Main-text">
              <h3>Farm Digitization Solution</h3>
              <p>
                {" "}
                Enable your workforce to carry out everyday operations
                efficiently.
              </p>
            </div>
            <div className="photo1">
              <img src={photo1} alt="picture" />
            </div>
          </div>
          <div className="Products_Main-photo2">
            <div className="Products_Main-text2">
              <h3>Farm Monitoring Solution</h3>
              <p>
                {" "}
                A centralized dashboard to keep track of operations and take
                informed decisions.
              </p>
            </div>
            <div className="photo2">
              <img src={photo2} alt="picture" />
            </div>
          </div>
          {/* // <img src={product1} alt="image not able to load"></img> */}
        </div>
        <div className="Product_footer">
          <p>
            Interested in learning more? Get in touch with us to explore our
            apps.
          </p>
          <div className="requestbutton">
            <button type="button">Request a demo</button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Products;
