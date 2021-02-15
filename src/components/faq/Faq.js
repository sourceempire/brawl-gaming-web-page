import React, { useState, useEffect, useRef } from "react";
import "./Faq.scss";
import Searchbar from "./Searchbar/Searchbar";
import Results from "./Results/Results";
import Categories from "./Categories/Categories";

const cats = [
  {
    id: 1,
    icon: "/images/cogs.svg",
    label: "General",
    top: [
      "What is Brawl Gaming?",
      "Is Brawl Gaming secure?",
      "What am I downloading?"
    ]
  },
  {
    id: 2,
    icon: "/images/games.svg",
    label: "Games",
    top: [
      "What games can you play?",
      "Are there coming more games?",
      "What type of games is there?"
    ]
  },
  {
    id: 3,
    icon: "/images/matches.svg",
    label: "Matches",
    top: [
      "How do I play a match?",
      "How does the matchmaking work?",
      "What happens if someone disconnects?"
    ]
  },
  {
    id: 4,
    icon: "/images/payments.svg",
    label: "Payments",
    top: [
      "How does the betting work?",
      "Why does it cost more than my bet?",
      "What is the minimum amount I can bet?"
    ]
  },
  {
    id: 5,
    icon: "/images/account.svg",
    label: "Account",
    top: [
      "How do I edit my account?",
      "How do I add money to my account?",
      "How do I take money from my account?"
    ]
  },
  {
    id: 6,
    icon: "/images/client.svg",
    label: "Client",
    top: [
      "My Client is not starting, what do I do?",
      "Why has my download stopped?",
      "How do I invite friends?"
    ]
  }
];

const FAQ = () => {
  const [phrase, setPhrase] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(cats);
  const [categoryResults, setCategoryResults] = useState([]);
  const categoryResultsRef = useRef();
  const [categoryResultHeight, setCategoryResultHeight] = useState(0);

  useEffect(() => {}, [searchResults]);
  useEffect(() => {
    async function scroll() {
      if (categoryResults.length > 0) {
        await setCategoryResultHeight(100);
        window.scrollTo(0, categoryResultsRef.current.offsetTop - 80);
        
      } else {
        await setCategoryResultHeight(0);
      }
    }
    scroll();
  }, [categoryResults]);

  useEffect(() => {
    if (searchResults) {
      
    }
  })

  return (
    <section className="faq">
      <h1 className="title">How can we help you?</h1>
      <div className="searchbar-wrapper">
        <Searchbar setPhrase={setPhrase} onSearch={setSearchResults} />
      </div>
      { searchResults.length !== 0 ? <Results title={`Search results for: "${phrase}"`} list={searchResults} /> : <Results id="categoryResult" title={category} list={categoryResults} />}
      
      <Categories
        list={categories}
        setCategory={setCategory}
        setCategoryResults={setCategoryResults}
      />
      {/*<div
        ref={categoryResultsRef}
        style={{ minHeight: categoryResultHeight + "vh" }}
      >
        
      </div>*/}
    </section>
  );
};

export default FAQ;
