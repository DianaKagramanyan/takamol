import Header from "./public/homepage/components/header/Header";
import Footer from "./public/homepage/components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import About from "./public/homepage/pages/About";
import Services from "./public/homepage/pages/Services";
import Faq from "./public/homepage/pages/Faq";
import Home from "./public/homepage/pages/Home";
import MainContent from "./public/homepage/components/home/MainContent";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="Main" element={<Home/>}/>
        <Route path="About Platform" element={<About/>}/>
        <Route path="Our Services" element={<Services/>}/>
        <Route path="Help" element={<Faq/>}/>
      </Routes>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
