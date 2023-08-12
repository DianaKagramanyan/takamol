import React from 'react';
import {logo, takamol} from "../../../../img";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">

      <div className="section">
        <div className="section1">administered</div>
        <img className="image-takamol" src={takamol} alt="takamol"/>
      </div>

      <div className="section">
        <div className="section1">Important links</div>
        <Link to="/AboutPlatform Platform" style={{textDecoration: 'none'}}>
          <div className="section1">About</div>
        </Link>
        <Link to="/Our Services" style={{textDecoration: 'none'}}>
          <div className="section1">Our services</div>
        </Link>
        <Link to="/Help" style={{textDecoration: 'none'}}>
          <div className="section1">Help</div>
        </Link>
        <Link to="/" style={{textDecoration: 'none'}}>
          <div className="section1">Terms and Conditions</div>
        </Link>
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
          <Link to="https://www.instagram.com/hrsd_sa/?igshid=YmMyMTA2M2Y%3D" target="_blank">
            <InstagramIcon className="icon-three" sx={{color: "#3C8084", fontSize: 30}}/>
          </Link>
          <Link to="https://www.youtube.com/c/HRSDsa" target="_blank">
            <YouTubeIcon className="icon-three" sx={{color: "#3C8084", fontSize: 30}}/>
          </Link>
          <Link to="https://twitter.com/hrsd_sa?s=21&t=oVEYi49T6hc944BpCiHpVQ" target="_blank">
            <TwitterIcon className="icon-three" sx={{color: "#3C8084", fontSize: 30}}/>
          </Link>
        </div>
      </div>

    </div>

  );
};

export default Footer;
