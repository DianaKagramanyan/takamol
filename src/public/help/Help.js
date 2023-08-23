import React from 'react';
import {help} from "../../img";

const Help = () => {
  return (
    <div>
      <div className="about-platform">
        <div>
          <img className="image-aboutPlatform" src={help} alt="help"/>
        </div>
        <div>
          <h1 className="header-about">Help</h1>
          <div className="about-description">
            Need help with one of our programs or services? We are pleased to serve you, contact us
            for assistance or to answer your inquiries by filling out the special form or visiting
            us at the support services office
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
