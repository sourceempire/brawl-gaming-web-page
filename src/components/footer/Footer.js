import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box">
        <div>
          <h4>Source Empire AB</h4>
          <p>Kuratorvägen 29 Lgh1002</p>
          <p>907 36 UMEÅ</p>
          <a href="mailto:info@sourceempire.io">info@sourceempire.io</a>
        </div>
      </div>
      <div className="box">
        <div>
          <h4>Links</h4>
          <Link exact to="/">
            Home
          </Link>
          <Link to="/download">Download</Link>
          <Link to="/concept">Concept</Link>
          <Link to="/games">Games</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
      <div className="box">
        <div>
          <h4>Follow</h4>
          <a href="https://www.linkedin.com/company/source-empire/about/">
            Linked In
          </a>
          <a href="https://www.instagram.com/brawlgaming/">Instagram</a>
        </div>
      </div>
      <p className="copyright">© Source Empire AB 2019</p>
    </footer>
  );
};

export default Footer;
