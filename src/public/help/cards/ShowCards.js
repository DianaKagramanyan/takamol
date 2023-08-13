import React from 'react';
import list from './data';
import Card from './Card';

const ShowCards = () => {
  return (
    <section>
      {
        list.map((item) =>
          (<Card key={item.id} item={item}/>
          ))}
    </section>
  );
};

export default ShowCards;
