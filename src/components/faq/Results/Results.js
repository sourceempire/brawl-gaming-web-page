import React from "react";
import PropTypes from "prop-types";
import "./results.scss";
import Result from "./Result";

const Results = ({ title, list }) => {
  return (
    <div className="results">
      <h1>{list.length === 0 ? "" : title}</h1>
      {list.map(r => (
        <Result key={r.id} result={r} />
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
