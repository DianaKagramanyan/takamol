import React, {useState} from 'react';
import {services} from "../../img";
import Button from "@mui/material/Button";
import BeneficiaryServices from "./BeneficiaryServices";
import AllCards from "./AllCards";


const Service = () => {
  const [show, setShow] = useState(false);

  const buttonStyles = {
    color: '#6B778C',
    // borderBottom: '2px solid #6B778C',
    // '&:hover': {
    //   borderBottom: '1px solid #6B778C',
    // },
  };

  const selectedButtonStyles = {
    color: '#3C8084',
    // borderBottom: '1px solid #3C8084',
    // '&:hover': {
    //   borderBottom: '1px solid #3C8084',
    // },
  };


  return (<div>

      <div className="about-platform">
        <div>
          <img className="image-aboutPlatform" src={services} alt="services"/>
        </div>
        <div>
          <h1 className="header-about">Our services</h1>
          <div className="about-description">
            This platform provides a set of electronic services to improve and facilitate procedures
            related to private rehabilitation centers for the beneficiaries and owners of the centers
          </div>
        </div>
      </div>

      <div>
        <div className="button-services">
          {
            show ?
              <div>
                <div className="make-center">
                  <div>
                    <Button
                      className="button-positions"
                      onClick={() => setShow(false)}
                      variant="text"
                      style={buttonStyles}
                    >
                      POSITIONS</Button>
                  </div>
                  <div>
                    <Button
                      variant="text"
                      style={selectedButtonStyles}
                    >BENEFICIARIES
                    </Button>
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
                    <Button
                      variant="text"
                      style={selectedButtonStyles}
                    >POSITIONS</Button>
                  </div>
                  <div>
                    <Button
                      onClick={() => setShow(true)}
                      variant="text"
                      style={buttonStyles}
                    >BENEFICIARIES</Button>
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
