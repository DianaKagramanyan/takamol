import React, {useState} from 'react';
import {Link} from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import PlaceIcon from '@mui/icons-material/Place';
import {TextField} from "@mui/material";


const Form = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = () => {
    // Perform form submission logic here
    let isValid = true;

    if (!name) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (!mobile) {
      setMobileError(true);
      isValid = false;
    } else {
      setMobileError(false);
    }

    if (!email) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }
    if (!subject) {
      setSubjectError(true);
      isValid = false;
    } else {
      setSubjectError(false);
    }

    if (!message) {
      setMessageError(true);
      isValid = false;
    } else {
      setMessageError(false);
    }

    // If all fields are valid, perform form submission
    if (isValid) {
      // Simulate form submission with alert
      // alert(`Submitted Data:
      //   Name: ${name}
      //   Mobile: ${mobile}
      //   Email: ${email}
      //   Subject: ${subject}
      //   Message: ${message}
      // `);

      // Clear form fields after submission
      setName('');
      setMobile('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };
  const handleBlur = (fieldName, fieldValue, setErrorFunction) => {
    if (!fieldValue) {
      setErrorFunction(true);
    }
  };


  return (
    <div>
      <h2 className="text-conn">Connect with us</h2>
      <div className="main-form">
        <div className="form">
          <div className="input">
            <TextField
              helperText={nameError ? "This field is required" : ""}
              error={nameError}
              id="outlined-error-helper-text"
              label="* Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
              onBlur={() => handleBlur('name', name, setNameError)}
            />
            <br/>
            <TextField
              helperText={mobileError ? "This field is required" : ""}
              error={mobileError}
              id="outlined-error-helper-text"
              label="* mobile"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
                setMobileError(false);
              }}
              onBlur={() => handleBlur('mobile', mobile, setMobileError)}
            />
            <br/>
            <TextField
              error={emailError}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              id="demo-helper-text-aligned"
              label="* Email"
              onBlur={() => handleBlur('email', email, setEmailError)}
            />
            <br/>
            <TextField
              helperText={subjectError ? "This field is required" : ""}
              error={subjectError}
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setSubjectError(false);
              }}
              id="demo-helper-text-aligned"
              label="* Subject"
              onBlur={() => handleBlur('subject', subject, setSubjectError)}
            />
            <br/>
            <TextField
              helperText={messageError ? "This field is required" : ""}
              error={messageError}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
              }}
              id="demo-helper-text-aligned"
              label="* Text"
              onBlur={() => handleBlur('message', message, setMessageError)}
            />
            <br/>
            <div className="button-send">
              <Button className="button-send"
                      sx={{color: "white", backgroundColor: "rgb(60, 128, 132)", width: "150px"}}
                      variant="contained"
                      onClick={handleSubmit}
              >Send</Button>
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
