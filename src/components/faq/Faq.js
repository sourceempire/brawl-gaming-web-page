import React, { useState, useEffect } from "react";
import "./faq.scss";
import Searchbar from "./Searchbar/Searchbar";
import Results from "./Results/Results";
import Categories from "./Categories/Categories";

const cats = [
  {
    id: 0,
    icon: "/images/cogs.svg",
    label: "General",
    top: [
      "What is Brawl Gaming?",
      "Is Brawl Gaming secure?",
      "What am I downloading?"
    ]
  },
  {
    id: 1,
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
      "What is Brawl Gaming?",
      "Is Brawl Gaming secure?",
      "What am I downloading?"
    ]
  },
  {
    id: 5,
    icon: "/images/account.svg",
    label: "Account",
    top: [
      "What games can you play?",
      "Are there coming more games?",
      "What type of games is there?"
    ]
  },
  {
    id: 6,
    icon: "/images/client.svg",
    label: "Client",
    top: [
      "How do I play a match?",
      "How does the matchmaking work?",
      "What happens if someone disconnects?"
    ]
  }
];

const FAQ = () => {
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState(cats);

  useEffect(() => {}, [results]);

  return (
    <section className="faq">
      <h1 className="title">How can we help you?</h1>
      <Searchbar onSearch={setResults} />
      <Results list={results} />
      <Categories list={categories} />
    </section>
  );
};

export default FAQ;
