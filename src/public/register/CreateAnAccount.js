import React from 'react';
import RegisterSteps from "./RegisterSteps";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Signup2 from "../../components/Signup2";


const CreateAnAccount = () => {
  return (
    <Box className="loginPage">
      {/*<Typography variant="h4" className="header-login">*/}
      {/*  Create an account*/}
      {/*</Typography>*/}
      {/*<RegisterSteps />*/}
      <Signup2/>
    </Box>
  );
};

export default CreateAnAccount;
