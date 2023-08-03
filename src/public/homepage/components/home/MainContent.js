import React from 'react';
import Cards from "./Cards";
import Platform from "./Platform";
import Center from "./Center";
import Goal from "./Goal";

const MainContent = () => {
  return (
    <div>
      <Platform/>
      <Cards/>
      <Center/>
      <Goal/>
    </div>
  );
};

export default MainContent;
