import React, {useState} from 'react';
import {services} from "../../img";
import Button from "@mui/material/Button";
import BeneficiaryServices from "./BeneficiaryServices";
import AllCards from "./AllCards";


const Service = () => {
  const [show, setShow] = useState(false);

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

      <div>
        <div className="button-services">
          {
            show ?
              <div>
                <div className="make-center">
                  <div>
                    <Button onClick={() => setShow(false)} variant="text" sx={{color: " #6B778C"}}>POSITIONS</Button>
                  </div>
                  <div>
                    <Button variant="text" sx={{color: " #6B778C"}}>BENEFICIARIES</Button>
                  </div>
                </div>
                <div>
                  <BeneficiaryServices/>
                </div>
              </div>
              :
              <div>
                <div className="make-center">
                  <div>
                    <Button variant="text" sx={{color: " #6B778C"}}>POSITIONS</Button>
                  </div>
                  <div>
                    <Button onClick={() => setShow(true)} variant="text" sx={{color: " #6B778C"}}>BENEFICIARIES</Button>
                  </div>
                </div>
                <div>
                  <AllCards/>
                </div>

              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Service;
