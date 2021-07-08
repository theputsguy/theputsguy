import React from "react";
import "./app.css";

const FAQLineElement = ({ question, answer }) => {
  const questionClickHandler = (e) => {
    e.currentTarget.children[1].classList.toggle("faq-answer-toggled");
  };
  return (
    <>
      <div className="faq-line-item" onClick={questionClickHandler}>
        <div className="faq-question">
          {question} <i className="fas fa-chevron-down"></i>
        </div>

        <div className="faq-answer">{answer}</div>
      </div>
    </>
  );
};

export default FAQLineElement;
