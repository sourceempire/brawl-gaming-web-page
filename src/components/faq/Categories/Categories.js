import React from "react";
import PropTypes from "prop-types";
import "./Categories.scss";
import Category from "./Category";

const Categories = ({ list, setCategory, setCategoryResults }) => {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="container">
        {list.map(c => (
          <Category
            key={c.id}
            category={c}
            setCategory={setCategory}
            setCategoryResults={setCategoryResults}
          />
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
    }).isRequired
  ),
  setCategory: PropTypes.func.isRequired,
  setCategoryResults: PropTypes.func.isRequired
};
export default Categories;
