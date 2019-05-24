import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./searchbar.scss";

const Searchbar = ({ setPhrase, onSearch }) => {
  const searchRef = useRef("");

  const search = async e => {
    e.preventDefault();
    const phrase = searchRef.current.value;
    const res = await fetch(`http://172.20.10.9:5000/faq/keyword/${phrase}`, {
      method: "GET"
    });
    if (res.status === 200) {
      const ret = await res.json();
      setPhrase(phrase);
      onSearch(ret);
    } else {
      alert("Couldn't find what you are searching for.");
      onSearch([]);
    }
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
      <button type="submit">
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
