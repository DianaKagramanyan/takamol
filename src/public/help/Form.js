import React, {useState} from 'react';
import {Link} from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import PlaceIcon from '@mui/icons-material/Place';
import {TextField} from "@mui/material";


const Form = () => {
  const [info, setInfo] = useState('');

  return (
    <div>
      <h2 className="text-conn">Connect with us</h2>
      <div className="main-form">
        <div className="form">
          <div className="input">
            <TextField
              id="outlined-error-helper-text"
              label="* Name"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              helperText={!info ? "This field is required" : null}
              error={!info}
            />
            <br/>
            <TextField
              // helperText="This field is required"
              id="demo-helper-text-aligned"
              label="* mobile"
            />
            <br/>
            <TextField
              // helperText="This field is required"
              id="demo-helper-text-aligned"
              label="* Email"
            />
            <br/>
            <TextField
              // helperText="This field is required"
              id="demo-helper-text-aligned"
              label="* Mesage subject"
            />
            <br/>
            <TextField
              // helperText="This field is required"
              id="demo-helper-text-aligned"
              label="* Mesage text"
            />
            <br/>
            <div className="button-send">
              <Button className="button-send"
                      sx={{color: "white", backgroundColor: "rgb(60, 128, 132)", width: "150px"}}
                      variant="contained">Send</Button>
            </div>
          </div>
        </div>


        <div className="location">
          <div className="first-loc">
            <div className="our-location">Our Location <PlaceIcon sx={{color: "rgb(250, 180, 20)"}}/></div>
            <div className="det">Building A6, Granada Office Oasis</div>
            <div className="det">Eastern Ring Road, Al Shuhada District</div>
            <div className="det">Riyadh, 13241</div>
            <div className="det">Kingdom of Saudi Arabia</div>
          </div>

          <div className="second-loc">
            <div className="det">You can also communicate through social networking pages</div>
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
    </div>
  );
};

export default Form;
