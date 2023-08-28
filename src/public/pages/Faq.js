import React from 'react';
import Help from "../help/Help";
import Form from "../help/Form";
import Questions from "../help/Questions";
import UserCards from "../help/UserCards";
import FinalForm from "../help/FinalForm";
import Footer from "../homepage/components/footer/Footer";
import Header from "../homepage/components/header/Header";

const Faq = () => {
  return (
    <div>
      <Header className="header"/>
      <Help/>
      <Form/>
      {/*<FinalForm/>*/}
      <Questions/>
      <UserCards/>
      <Footer/>
    </div>
  );
};

export default Faq;
