import React, { useState } from "react";
import PropTypes from "prop-types";
import "./results.scss";

const Result = ({ result }) => {
  const [active, setActive] = useState(true);
  const style = active ? "scaleY(-1)" : "scaleY(1)";
  return (
    <div className="result">
      <span onClick={() => setActive(!active)}>
        <h4>{result.question}</h4>
        <img
          src="/images/chevron.svg"
          alt="arrow"
          style={{ transform: style }}
        />
      </span>
      <p hidden={active}>{result.answer}</p>
    </div>
  );
};

Result.propTypes = {
  results: PropTypes.shape({
    id: 0,
    question: PropTypes.string,
    answer: PropTypes.string
  })
};

export default Result;
