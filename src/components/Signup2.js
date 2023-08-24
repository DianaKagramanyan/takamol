import * as React from 'react';
import {TextField, Grid, Paper, styled} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import {UserAuth} from "../context/AuthContext";
import Button from "@mui/material/Button";

export default function Signup2() {
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
        <form onSubmit={handleSubmit}>
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


          <Grid className="two-Buttons" container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
            <Grid item xs={6}>
              <Button
                sx={{color: "white", backgroundColor: "#3C8084"}}
                type="submit"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>

        </form>


        <Box sx={{p: 3}} className="after">
          <Link
            to="https://www.hrsd.gov.sa/ar/ministry/about-ministry/policies-strategies/policies/privacy-policy-and-terms-use"
            target="_blank"
            style={{textDecoration: 'none'}}
          >
            <Typography className="small-links">privacy policy</Typography>
          </Link>


          <Typography className="small-text2">Do you have an account on the platform?</Typography>

          <Link to="/login" style={{textDecoration: 'none'}}>
            <Typography className="small-links">sign in</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
