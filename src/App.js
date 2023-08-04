import Header from "./public/homepage/components/header/Header";
import Footer from "./public/homepage/components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import About from "./public/homepage/pages/About";
import Services from "./public/homepage/pages/Services";
import Faq from "./public/homepage/pages/Faq";
import MainContent from "./public/homepage/components/home/MainContent";
import './public/homepage/styles/header.css'
import ServiceDescription from "./public/homepage/pages/ServiceDescription";
import Login from "./public/homepage/pages/Login";
import Registration from "./public/homepage/pages/Registration";


function App() {
  return (
    <div>
      <Header className="header"/>
      <Routes>
        <Route path="/" element={<MainContent/>}/>
        <Route path="Main" element={<MainContent/>}/>
        <Route path="About Platform" element={<About/>}/>
        <Route path="Our Services" element={<Services/>}/>
        <Route path="Help" element={<Faq/>}/>
        <Route path="/serviceDescription" element={<ServiceDescription/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
      </Routes>
      {/*<MainContent/>*/}
      <Footer/>
    </div>
  );
}

export default App;
