import React from 'react';
import {useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import HeaderDashboard from "../public/dashboard/HeaderDashboard";
import SideBar from "../public/dashboard/SideBar";
import ClippedBar from "../public/dashboard/ClippedBar";
import Box from "@mui/material/Box";
import {CssBaseline} from "@mui/material";

const Account = () => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Box>
      <CssBaseline />
      <HeaderDashboard/>
      {/*<SideBar/>*/}
      <ClippedBar/>
      <div className="loginPage">
        <h1>Account</h1>
        <p>User Email: {user && user.email}</p>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </Box>
  );
};

export default Account;
