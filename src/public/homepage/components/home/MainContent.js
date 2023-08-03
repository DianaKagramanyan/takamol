import React from 'react';
import Cards from "./Cards";
import Platform from "./Platform";
import Center from "./Center";

const MainContent = () => {
  return (
    <div>
      <Platform/>
      <Cards/>
      <Center/>
    </div>
  );
};

export default MainContent;
