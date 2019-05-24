import React from "react";
import PropTypes from "prop-types";
import "./categories.scss";

const Category = ({ category, setCategory, setCategoryResults }) => {
  const searchCategory = async e => {
    e.preventDefault();
    const res = await fetch(`http://172.20.10.9:5000/faq/cat/${category.id}`, {
      method: "GET"
    });
    if (res.status === 200) {
      const ret = await res.json();
      setCategory(category.label);
      setCategoryResults(ret);
    } else {
      setCategory("Not able to find category right now.");
      setCategoryResults([]);
    }
  };

  return (
    <div className="category">
      <img src={category.icon} alt={category.label} />
      <h3>{category.label}</h3>
      {category.top.map(t => (
        <p key={Math.random()}>{t}</p>
      ))}
      <button onClick={e => searchCategory(e)}>Show more</button>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    icon: PropTypes.string,
    label: PropTypes.string,
    top: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  setCategory: PropTypes.func.isRequired,
  setCategoryResults: PropTypes.func.isRequired
};
export default Category;
