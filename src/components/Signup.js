import * as React from 'react';
import {TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import {UserAuth} from "../context/AuthContext";
import Button from "@mui/material/Button";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const {createUser} = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <Box className="loginPage">
      <Typography variant="h4" className="header-login">
        Create an account
      </Typography>
      <Box className="step">
        <form className="center-items" onSubmit={handleSubmit}>
          <Box className="login-input">
            <Box className="log-input">
              <TextField
                label="* Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Box className="log-input">
              <TextField
                label="* Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
          </Box>

          <Box className="custom-button">

            <Button
              className="custom-button"
              variant="contained"
              sx={{color: "white", backgroundColor: "#3C8084"}}
              type="submit"
            >
              Sign Up
            </Button>
          </Box>


        </form>


        <Box className="after">
          <Box className="small-text">
            <Link
              to="https://www.hrsd.gov.sa/ar/ministry/about-ministry/policies-strategies/policies/privacy-policy-and-terms-use"
              target="_blank"
              style={{textDecoration: 'none'}}
            >
              <Typography className="small-links">privacy policy</Typography>
            </Link>
          </Box>

          <Box className="small-text">
            <Typography className="small-text2">Do you have an account on the platform?</Typography>
          </Box>

          <Box className="small-text">
            <Link to="/login" style={{textDecoration: 'none'}}>
              <Typography className="small-links">sign in</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
