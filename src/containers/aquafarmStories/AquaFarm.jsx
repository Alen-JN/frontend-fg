import React from "react";
import "./aquafarm.css";
import { Link, useNavigate } from "react-router-dom";
import { Heading } from "../../components";
import img from '../../media/case_study.png'


function AquaFarm() {

  // const navigate = useNavigate()
  return (
    <div className="aquafarm section__padding" id="aquafarm">
      <div className="aquafarm-header">
        <Heading
          subtitle="CASE STUDY"
          title="Our Aquafarm Stories"
          text="Discover a wealth of benefits from our technology, empowering your aquabusiness"
        />
      </div>
      <div className="aquafarm-content ">
        <div className="aquafarm-content_box">
          <div className="aquafarm-content_box-img">
            <img src={img} alt="image_casestudy" />
          </div>
          <div className="aquafarm-content_box-body">
            <div className="aquafarm-content_box-body-cover">
            <h4>
              Cost Optimization and Traceability Ensured by Fishgram -Aqua
            </h4>
            <p>
              Read about Fishgram -Aqua’s value proposition in the Farms managed
              by Mr. Nishant Reddy
            </p>
         <a href='/casestudy'>
            <button type="button"  >Lets read <span>&#8594;</span>
</button>
</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AquaFarm;
