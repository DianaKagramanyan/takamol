import '../../styles/header.css';
import React from 'react';
import {image1} from "../../../../img";
import Button from "@mui/material/Button";

const Platform = () => {
  return (
    <div className="platform">
      <div className="image">
        <img className="img" src={image1} alt="image1"/>
      </div>

      <div className="detail">
        <h1 className="header1">
          Social rehabilitation and guidance platform
        </h1>
        <p className="description">
          The platform serves the groups most dear to our hearts, including people
          with disabilities, the elderly, and orphans. It also helps our partners
          from rehabilitation centers to provide services that meet their needs
        </p>

        <div className='button'>
          <div className='button-out'>
            <Button className='button-out' sx={{color:" #3C8084", border: ".5px solid #3C8084"}} variant="outlined" >Browse our services</Button>
          </div>
          <div className='button-out'>
            <Button className='button-cont' sx={{color:"white", backgroundColor: "rgb(60, 128, 132)"}} variant="contained" >Create account</Button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Platform;
