import React from 'react';
import Background from "../login/Background";
import Signin from "../../components/Signin";
import Header from "../homepage/components/header/Header";

const Login = () => {
  return (
    <div>
      <Header className="header"/>
      <div className="login">
        <Background/>
        <Signin/>
      </div>
    </div>
  );
};

export default Login;
