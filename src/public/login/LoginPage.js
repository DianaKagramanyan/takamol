import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginInput from "./LoginInput";

const LoginPage = () => {
  return (
    <Box className="loginPage">
      <Typography variant="h4" className="header-login">
        Login
      </Typography>
      <LoginInput/>
    </Box>
  );
};

export default LoginPage;
