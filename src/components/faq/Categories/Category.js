import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./categories.scss";

const Categories = ({ category }) => {
  return (
    <div className="category">
      <img src={category.icon} alt={category.label} />
      <h3>{category.label}</h3>
      {category.top.map(t => (
        <p>{t}</p>
      ))}
      <Link to={`/faq/${category.label.toLowerCase()}`}>Show more</Link>
    </div>
  );
};

Categories.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    icon: PropTypes.string,
    label: PropTypes.string,
    top: PropTypes.arrayOf(PropTypes.string)
  })
};
export default Categories;
