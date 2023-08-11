import React from 'react';

import Goal from "../homepage/components/home/Goal";
import Platform from "../homepage/components/home/Platform";
import Cards from "../homepage/components/home/Cards";
import Center from "../homepage/components/home/Center";


const Home = () => {
  return (
    <div>
      <Platform/>
      <Cards/>
      <Center/>
      <Goal/>
    </div>
  );
};

export default Home;
