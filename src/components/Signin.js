import React, {useState} from 'react';
import {TextField} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import {Link, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {UserAuth} from "../context/AuthContext";
import Button from "@mui/material/Button";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {signIn} = UserAuth();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const onCaptchaChange = () => {
    setIsCaptchaVerified(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };


  return (
    <Box className="loginPage">
      <Typography variant="h4" className="header-login">
        Login
      </Typography>

      <Box className="step">
        <form className="center-items" onSubmit={handleSubmit}> {/* Add onSubmit here */}
          <Box className="login-input">
            <Box className="log-input">
              <TextField
                label="* email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Box className="log-input">
              <TextField
                label="* password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
          </Box>


          <Box>
            <ReCAPTCHA
              sitekey="6Lfoe7gnAAAAAMlBJPyFfwY3VZssC_r2rQGWhUN0"
              onChange={onCaptchaChange}
            />
          </Box>

          <Box>
            <Link to="/forgetpassword" style={{textDecoration: 'none'}}>
              <Typography className="small-links">Forgot you password?</Typography>
            </Link>
          </Box>

          <Box className="custom-button">
            <Button
              className="custom-button"
              variant="contained"
              sx={{
                color: isCaptchaVerified ? "white" : "darkgray", // Change color based on verification
                backgroundColor: isCaptchaVerified ? "#3C8084" : "lightgray", // Change background color based on verification
                cursor: isCaptchaVerified ? "pointer" : "default",// Change cursor based on verification
              }}
              type="submit"
            >
              Next
            </Button>
          </Box>


        </form>
        <Box className="center-items">

          <Box className="small-text">
            <Typography>Don't have an account on the platform?</Typography>
          </Box>

          <Box className="small-text">
            <Link to="/register" style={{textDecoration: 'none'}}>
              <Typography className="small-links">Create a new account</Typography>
            </Link>
          </Box>

          <Box className="small-text">
            <Link
              to="https://www.hrsd.gov.sa/ar/ministry/about-ministry/policies-strategies/policies/privacy-policy-and-terms-use"
              target="_blank"
              style={{textDecoration: 'none'}}
            >
              <Typography className="small-links">privacy policy</Typography>
            </Link>
          </Box>

        </Box>

      </Box>
    </Box>
  );
};

export default SignIn;




