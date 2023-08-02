import '../../styles/platform.css';
import React from 'react';
import {image1} from "../../../../img";
import Button from "@mui/material/Button";

const Platform = () => {
  return (
    <div className="platform">
      <div className="image">
        <img src={image1} alt="image1"/>
      </div>

      <div>
        <h1>
          Social rehabilitation and guidance platform
        </h1>
        <p>
          The platform serves the groups most dear to our hearts, including people
          with disabilities, the elderly, and orphans. It also helps our partners
          from rehabilitation centers to provide services that meet their needs
        </p>
        <div className='button'>
          <div className='button-out'>
            <Button variant="outlined" color="success">Browse our services</Button>
          </div>
          <div className='button-cont'>
            <Button variant="contained" color="success">Create account</Button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Platform;
