import React from "react";
import "./fishgramaqua.css";
import { Heading } from "../../../components";
import imgheader from "../../../media/fishgram.svg";
import img1 from "../../../media/aqua1.png";
import img2 from "../../../media/aqua2.png";
import img3 from "../../../media/aqua3.png";
import img4 from "../../../media/aqua4.png";

function Fishgramaqua() {
  return (
    <div className="fishgramaqua section__padding_3">
      <div className="fishgramaqua-header">
        <img src={imgheader} alt="header" />
        <Heading
          subtitle=""
          title="How Fishgram-Aqua Transformed Nishant Reddy's Aquaculture"
          text="Recognizing Nishant's need for tailored solutions and the significance of traceability, Fg-Aqua enabled four essential solution pillars: Digitization, Analytics, Insights, and Actions."
        />
      </div>
      <div className="fishgramaqua-content">
        <div className="fishgramaqua-content_1">
          <div className="fishgramaqua-content_1-img">
            <img src={img1} alt="f1" />
          </div>
          <div className="fishgramqaua-content_1-body">
            <h4>Digitization</h4>
            <p>
            FG-Aqua introduced digitization to Nishant's farming practices,
              bringing visibility to the actions of his workforce. This enabled
              data collection and analysis, providing a clear view of the farm's
              performance and workforce productivity.            </p>
          </div>
        </div>
        <div className="fishgramaqua-content_2">
           <div className="fishgramaqua-content_2-img">
            <img src={img2} alt="f2" />
          </div>
          <div className="fishgramqaua-content_2-body">
            <h4>Analytics</h4>
            <p>
            The platform empowered Nishant with analytics tools to gain valuable insights into his aqua farming performance. Through these tools, he could monitor his entire farm at a glance, keeping track of temperature, oxygen levels, feeding schedules, and stock inventory through a centralized control panel.

            </p>
          </div>
        </div>
        
        <div className="fishgramaqua-content_3">
        <div className="fishgramaqua-content_3-img">
            <img src={img3} alt="f3" />
          </div>
          <div className="fishgramqaua-content_3-body">
            <h4>Insights</h4>
            <p>
            One of the most significant benefits Nishant experienced was the ability to access real-time insights. These included disease alerts, harvest alerts, feed input management, and many more. He was no longer operating in the dark; he could anticipate and respond to issues promptly.            </p>
          </div>
        </div>
        <div className="fishgramaqua-content_4">
        <div className="fishgramaqua-content_4-img">
            <img src={img4} alt="f4" />
          </div>
          <div className="fishgramqaua-content_4-body">
            <h4>Actions</h4>
            <p>
            Nishant's ability to take action was enhanced through FG-Aqua. The platform enabled him to set customized feeding schedules based on fish growth stages, ensuring maximum nutrition and minimal waste. He could also monitor water quality, managing pH, salinity, and dissolved oxygen levels. Stock inventory tracking became seamless, allowing him to track inventory levels, manage breeding programs, and schedule stock deliveries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fishgramaqua;
