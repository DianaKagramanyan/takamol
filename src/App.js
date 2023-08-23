import Header from "./public/homepage/components/header/Header";
import {Route, Routes} from "react-router-dom";
import Services from "./public/pages/Services";
import Faq from "./public/pages/Faq";
import ServiceDescription from "./public/pages/ServiceDescription";
import Login from "./public/pages/Login";
import Registration from "./public/pages/Registration";
import './public/styles/header.css';
import Home from "./public/pages/Home";
import About from "./public/pages/About";
import ForgetPassword from "./public/pages/ForgetPassword";
import {createTheme, ThemeProvider} from "@mui/material/styles";
// import {theme} from "./public/register/RegisterTabs";
// import {AuthProvider} from "./contexts/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3C8084'
    },
    secondary: {
      main: '#6B778C'
    },
  },
});


function App() {
  return (
    // <AuthProvider>
      <ThemeProvider theme={theme}>
        <div>
          <Header className="header"/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Main" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Our Services" element={<Services/>}/>
            <Route path="Help" element={<Faq/>}/>
            <Route path="/serviceDescription" element={<ServiceDescription/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Registration/>}/>
            <Route path="/forgetpassword" element={<ForgetPassword/>}/>
          </Routes>
        </div>
      </ThemeProvider>
      // </AuthProvider>
  );
}

export default App;
