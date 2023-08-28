import React from 'react';
import Service from "../services/Service";
import Footer from "../homepage/components/footer/Footer";
import Header from "../homepage/components/header/Header";

const Services = () => {
  return (
    <div>
      <Header className="header"/>
      <Service/>
      <Footer/>
    </div>
  );
};
export default Services;
