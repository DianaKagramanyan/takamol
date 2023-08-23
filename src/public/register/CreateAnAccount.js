import React from 'react';
import RegisterSteps from "./RegisterSteps";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const CreateAnAccount = () => {
  return (
    // <div className="loginPage">
    //     <div className="header-login">Create an account</div>
    //     <RegisterTabs/>
    //   </div>
    <Box className="loginPage">
      <Typography variant="h4" className="header-login">
        Create an account
      </Typography>
      <RegisterSteps />
    </Box>
  );
};

export default CreateAnAccount;
