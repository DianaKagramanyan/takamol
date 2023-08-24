import React from 'react';
import BackgroundRegister from "../register/BackgroundRegister";
import CreateAnAccount from "../register/CreateAnAccount";
import Test from "../test/Test";
import Signup from "../../components/Signup";

const Registration = () => {
  return (
    <div className="login">
     <BackgroundRegister/>
      {/*<CreateAnAccount/>*/}
      <Signup/>

    </div>
  );
};

export default Registration;
