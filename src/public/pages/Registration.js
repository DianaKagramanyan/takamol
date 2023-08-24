import React from 'react';
import BackgroundRegister from "../register/BackgroundRegister";
import Signup from "../../components/Signup";
import CreateAnAccount from "../register/CreateAnAccount";
import Signup2 from "../../components/Signup2";

const Registration = () => {
  return (
    <div className="login">
     <BackgroundRegister/>
      {/*<CreateAnAccount/>*/}
      {/*<Signup/>*/}
      <Signup2/>

    </div>
  );
};

export default Registration;
