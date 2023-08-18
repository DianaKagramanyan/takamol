import React from 'react';

import Goal from "../homepage/components/home/Goal";
import Platform from "../homepage/components/home/Platform";
import Cards from "../homepage/components/home/Cards";
import Center from "../homepage/components/home/Center";
import Footer from "../homepage/components/footer/Footer";


const Home = () => {
  return (
    <div>
      <Platform/>
      <Cards/>
      <Center/>
      <Goal/>
      <Footer/>
    </div>
  );
};

export default Home;
