import React from 'react';

import Goal from "../homepage/components/home/Goal";
import Platform from "../homepage/components/home/Platform";
import Cards from "../homepage/components/home/Cards";
import Center from "../homepage/components/home/Center";
import Footer from "../homepage/components/footer/Footer";
import Header from "../homepage/components/header/Header";


const Home = () => {
  return (
    <div>
      <Header className="header"/>
      <Platform/>
      <Cards/>
      <Center/>
      <Goal/>
      <Footer/>
    </div>
  );
};

export default Home;
