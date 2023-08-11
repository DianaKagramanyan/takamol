import React from 'react';
import {Link} from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from "@mui/material/Button";

const Form = () => {
  return (
    <div>
      <h2 className="text-connect">Connect with us</h2>
      <div className="main-form">
        <div className="form">
          <div className="input">
            <OutlinedInput className="input-1"/>
            <OutlinedInput className="input-1"/>
            <OutlinedInput className="input-1"/>
            <OutlinedInput className="input-1"/>
            <OutlinedInput className="input-1"/>
            <div className="button-send">
              <Button sx={{color: "white", backgroundColor: "rgb(60, 128, 132)", width: "150px"}}
                      variant="contained">Send</Button>
            </div>
          </div>


        </div>


        <div className="location">
          <div>Our Location</div>
          <div>Building A6, Granada Office Oasis</div>
          <div>Eastern Ring Road, Al Shuhada District</div>
          <div>Riyadh, 13241</div>
          <div>Kingdom of Saudi Arabia</div>
          <div>You can also communicate through social networking pages</div>
          <div>
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
    </div>
  );
};

export default Form;
