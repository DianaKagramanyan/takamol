import React from 'react';
import {logo, takamol} from "../../../../img";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footer">

      <div className="section">
        <div className="section1">administered</div>
        <img className="image-takamol" src={takamol} alt="takamol"/>
      </div>

      <div className="section">
        <div className="section1">Important links</div>
        <div className="section1">About platform</div>
        <div className="section1">Our services</div>
        <div className="section1">Help</div>
        <div className="section1">Terms and Conditions</div>
      </div>

      <div className="section">
        <div className="section1">Connect with us</div>
        <div className="section-number">920000000</div>
        <div className="section1">Building A6, Granada Office Oasis</div>
        <div className="section1">Eastern Ring Road, Al Shuhada District</div>
        <div className="section1">Riyadh, 13241</div>
        <div className="section1">Kingdom of Saudi Arabia</div>
      </div>

      <div className="section">
        <div className="section1">Platform</div>
        <img src={logo} alt="logoImage"/>
        <div className="section1">All rights reserved to Rehabilitation and Social Guidance</div>
        <div className="section1">Platform | Qualification 2023</div>
        <div className="icon-three">
          <InstagramIcon className="icon-three" color="success"  sx={{ fontSize: 30 }} />
          <YouTubeIcon className="icon-three" color="success" sx={{ fontSize: 30 }}/>
          <TwitterIcon className="icon-three" color="success" sx={{ fontSize: 30 }}/>
        </div>
      </div>

    </div>

  );
};

export default Footer;
