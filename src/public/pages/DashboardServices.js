import React from 'react';
import HeaderDashboard from "../dashboard/HeaderDashboard";
import Box from "@mui/material/Box";
import {CssBaseline} from "@mui/material";
import ContentService from "../dashboard/ContentService";

const DashboardServices = () => {
  return (
    <Box>
      <CssBaseline />
      <HeaderDashboard/>
      <ContentService/>
    </Box>
  );
};

export default DashboardServices;
