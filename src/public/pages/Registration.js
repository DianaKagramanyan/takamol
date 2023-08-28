import React from 'react';
import BackgroundRegister from "../register/BackgroundRegister";
import Signup from "../../components/Signup";
import Header from "../homepage/components/header/Header";

const Registration = () => {
  return (
    <div>
      <Header className="header"/>
      <div className="login">
        <BackgroundRegister/>
        <Signup/>
      </div>
    </div>
  );
};

export default Registration;
