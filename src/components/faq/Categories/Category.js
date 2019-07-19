import React from "react";
import PropTypes from "prop-types";
import Server from "../../../utils/Server";
import Fetcher from "../../../utils/Fetcher";
import "./categories.scss";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Category = ({ category, setCategory, setCategoryResults }) => {
  const searchCategory = async e => {
    e.preventDefault();
    Fetcher.get(SERVER_URL + "api/public/faq/", {title: category.label.toLowerCase()})
      .then(resp => {
        delete resp['succeeded']
        setCategory(category.label);
        setCategoryResults(resp);
      })
      .catch((err) => {
        setCategory("Not able to find category right now.");
        setCategoryResults([]);
        console.log(err);
      }) 
    }
  /*const searchCategory = async e => {
    e.preventDefault();
    const res = await fetch(`${Server.ip}/faq/cat/${category.id}`, {
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
  };*/

  return (
    <div className="category">
      <img src={category.icon} alt={category.label} />
      <h3>{category.label}</h3>
      {category.top.map(t => (
        <p key={Math.random()}>{t}</p>
      ))}
      <div className="button-wrapper">
        <button onClick={e => searchCategory(e)}>Show more</button>
      </div>
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
