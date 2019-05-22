import React from "react";
import PropTypes from "prop-types";
import "./categories.scss";
import Category from "./Category";

const Categories = ({ list }) => {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="container">
        {list.map(c => (
          <Category key={Math.random()} category={c} />
        ))}
      </div>
    </div>
  );
};

Categories.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      icon: PropTypes.string,
      label: PropTypes.string,
      top: PropTypes.arrayOf(PropTypes.string)
    })
  )
};
export default Categories;
