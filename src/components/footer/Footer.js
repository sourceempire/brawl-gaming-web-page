import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="box">
          <div className="context-container">
            <h4>Contact</h4>
            <p>Source Empire AB</p>
            <p>Tvistevägen 47</p>
            <p>907 29 UMEÅ</p>
            <a href="mailto:info@sourceempire.io">info@sourceempire.io</a>
          </div>
        </div>
        <div className="box">
          <div className="context-container">
            <h4>Links</h4>
            <Link to="/" onClick={() => scrollToTop()}>
              Home
            </Link>
            <Link to="/download" onClick={() => scrollToTop()}>
              Download
            </Link>
            <Link to="/concept" onClick={() => scrollToTop()}>
              Concept
            </Link>
            <Link to="/games" onClick={() => scrollToTop()}>
              Games
            </Link>
            <Link to="/faq" onClick={() => scrollToTop()}>
              FAQ
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="context-container">
            <h4>Follow</h4>
            <a href="https://www.linkedin.com/company/source-empire/about/">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/brawlgaming/">Instagram</a>
          </div>
        </div>
        <p className="copyright">© Source Empire AB 2019</p>
      </div>
    </footer>
  );
};

export default Footer;
