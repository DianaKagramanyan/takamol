import React from 'react';
import {services} from "../../img";
import Button from "@mui/material/Button";
import CenterServices from "./CenterServices";
import BeneficiaryServices from "./BeneficiaryServices";
import AllCards from "./AllCards";


const Service = () => {
  return (<div>

      <div className="about-platform">
        <div>
          <img className="image-aboutPlatform" src={services} alt="services"/>
        </div>
        <div>
          <h1 className="header-about">Our services</h1>
          <p className="about-description">
            This platform provides a set of electronic services to improve and facilitate procedures
            related to private rehabilitation centers for the beneficiaries and owners of the centers
          </p>
        </div>
      </div>


      <div className="button-services">
        <Button variant="text" sx={{color: " #6B778C"}}>POSITIONS</Button>
        <Button variant="text" sx={{color: " #6B778C"}}>BENEFICIARIES</Button>
      </div>

      <AllCards/>
      <BeneficiaryServices/>


    </div>
  );
};

export default Service;
