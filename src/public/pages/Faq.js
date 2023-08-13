import React from 'react';
import Help from "../help/Help";
import Form from "../help/Form";
import Questions from "../help/Questions";
import UserCards from "../help/UserCards";

const Faq = () => {
  return (
    <div>
      <Help/>
      <Form/>
      <Questions/>
      <UserCards/>
    </div>
  );
};

export default Faq;
