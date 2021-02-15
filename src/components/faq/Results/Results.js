import React from "react";
import PropTypes from "prop-types";
import "./Results.scss";
import Result from "./Result";

const Results = ({ title, list }) => {
  return (
    <div className="results">
      <h1>{Object.keys(list).length === 0 ? "" : title}</h1>
      {Object.entries(list).map(([question, answer]) => ( 
        <Result question={question} answer={answer} key={question}/>
      ))}
    </div>
  );
};

Results.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: 0,
      question: PropTypes.string,
      answer: PropTypes.string
    }).isRequired
  )
};

export default Results;
