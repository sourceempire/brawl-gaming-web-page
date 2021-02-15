import React, { useRef } from "react";
import PropTypes from "prop-types";
import Fetcher from "../../../utils/Fetcher";
import "./Searchbar.scss";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Searchbar = ({ setPhrase, onSearch }) => {
  const searchRef = useRef("");
  
  

  const search = async e => {
    e.preventDefault();
    const phrase = searchRef.current.value.toLowerCase();
    Fetcher.get(SERVER_URL + 'api/public/faq/', {title: phrase})
    .then(resp => {
      delete resp['succeeded']
      setPhrase(phrase);
      onSearch(resp);
    })
    .catch(err => console.log(err));
      onSearch([]); 
  };

  return (
    <form className="searchbar" onSubmit={e => search(e)}>
      <input
        type="text"
        ref={searchRef}
        placeholder="Enter a keyword"
        minLength="2"
        maxLength="50"  
      />
      <button type="submit" >
        <img src="/images/search.svg" alt="search" />
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  setPhrase: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Searchbar;
