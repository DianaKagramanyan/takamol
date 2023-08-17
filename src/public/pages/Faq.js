import React from 'react';
import Help from "../help/Help";
import Form from "../help/Form";
import Questions from "../help/Questions";
import UserCards from "../help/UserCards";
import FinalForm from "../help/FinalForm";

const Faq = () => {
  return (
    <div>
      <Help/>
      <Form/>
      {/*<FinalForm/>*/}
      <Questions/>
      <UserCards/>
    </div>
  );
};

export default Faq;
