import React from "react";
import './usecase.css'
import { Heading } from "../../components";
import img1 from '../../media/usecase_img1.png'
import img2 from '../../media/usecase_img2.png'
import img3 from '../../media/usecase_img3.png'
import img4 from '../../media/usecase_img4.png'



function UseCase() {
  return (
    <div className="usecase section__padding" id="usecase">
      <div className="usecase-header">
        <div className="usecase-header_subheading">
          <Heading
            subtitle="USE CASE"
            title="Who can benefit from our solution"
            text="Custom Solutions for Diverse Industries"
          />
        </div>
      </div>
      <div className="usecase-content">
        <div className="usecase-content_1">
          <div className="usecase-content_1-img">
            <img src={img1} alt="img_1" />
          </div>
          <div className="usecase-content_1-body">
            <h4>Government entities</h4>
            <p>Land-use classification, Digitisation of land titles, Crop acreage estimation, Plan import and export of fish products</p>
          </div>
        </div>
        <div className="usecase-content_2">
          <div className="usecase-content_1-img">
          <img src={img2} alt="img_2" />
          </div>
          <div className="usecase-content_1-body">
            <h4>Financial institutions</h4>
            <p>Utilize alternative data for assessing pond type, pond health, and performance to evaluate credit risks in aquaculture</p>
          </div>
        </div>
        <div className="usecase-content_3">
          <div className="usecase-content_1-img">
          <img src={img3} alt="img_3" />
          </div>
          <div className="usecase-content_1-body">
            <h4>Agribusinesses</h4>
            <p>Get supply-demand insights, Remotely monitor pond health, stress, water quality and yield, eliminating frequent on-site visits</p>
          </div>
        </div>
        <div className="usecase-content_4">
          <div className="usecase-content_1-img">
          <img src={img4} alt="img_4" />
          </div>
          <div className="usecase-content_1-body">
            <h4>Insurance</h4>
            <p>Map and appraise extent of damage on ponds (due to rain, floods, droughts, etc.), Aquaculture pond insurance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseCase;
