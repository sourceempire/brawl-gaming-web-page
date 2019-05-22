import React from "react";
import PropTypes from "prop-types";
import "./results.scss";
import Result from "./Result";

const Results = ({ list }) => {
  return (
    <div className="results">
      <h1>{list.length === 0 ? "" : "Results"}</h1>
      {list.map(r => (
        <Result key={r.id} result={r} />
      ))}
    </div>
  );
};

Results.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: 0,
      question: PropTypes.string,
      answer: PropTypes.string
    })
  )
};

export default Results;
