import React from 'react';
import AboutPlatform from "../about/AboutPlatform";
import Footer from "../homepage/components/footer/Footer";
import Header from "../homepage/components/header/Header";


const About = () => {
  return (
    <div>
      <Header className="header"/>
      <AboutPlatform/>
      <Footer/>
    </div>
  );
};

export default About;
