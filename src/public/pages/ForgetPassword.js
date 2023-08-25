import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {UserAuth} from "../../context/AuthContext";

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const {resetPassword} = UserAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('')
    try {
      await resetPassword(email)
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };


  return (
    <Box className="loginPage">
      <Typography variant="h4" className="header-login">
        Reset your password
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
          </Box>
          <Box className="custom-button">
            <Button
              className="custom-button"
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#3C8084",
                cursor: "pointer"
              }}
              type="submit"
            >
              Reset
            </Button>
          </Box>
        </form>

        <Box className="center-items">
            <Box className="small-text">
            <Link to="/login" style={{textDecoration: 'none'}}>
              <Typography className="small-links">Login</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgetPassword;





