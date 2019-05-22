import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./searchbar.scss";

const Searchbar = ({ onSearch }) => {
  const searchRef = useRef("");

  const search = async e => {
    e.preventDefault();
    const res = await fetch("http://130.239.212.58:5000/faq", {
      method: "GET"
    });
    if (res.status === 200) {
      const ret = await res.json();
      onSearch(ret);
    } else {
      onSearch([]);
      alert("Not able to search right now.");
    }

    // onSearch(ret);
  };

  return (
    <form className="searchbar" onSubmit={e => search(e)}>
      <input type="text" ref={searchRef} placeholder="Describe your issue" />
      <button>
        <img src="/images/search.svg" alt="search" />
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Searchbar;
