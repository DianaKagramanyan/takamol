import React from 'react';
import Tabs from "@mui/material/Tabs";
import BasicTabs from "./Tabs";

const BeneficiaryServices = () => {
  return (
    <div className="servicesCards">
      <h2 className="headerServices">Beneficiary services</h2>
      <Tabs/>
      <BasicTabs/>
    </div>
  );
};

export default BeneficiaryServices;
