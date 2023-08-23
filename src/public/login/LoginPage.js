import React from 'react';
import LoginTabs from "./LoginTabs";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginInput from "./LoginInput";

const LoginPage = () => {
  return (
    // <div className="loginPage">
    //   <div className="header-login">Login</div>
    //   <LoginTabs/>
    // </div>
    <Container maxWidth="xs">
      <Box sx={{textAlign: 'center', pt: 3}}>
        <Typography variant="h5">Login</Typography>
      </Box>
      <LoginInput/>
    </Container>
  );
};

export default LoginPage;
