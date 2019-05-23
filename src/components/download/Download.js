import React, { useState, useEffect } from "react";
import "./download.scss";

const Download = () => {
  const [os, setOs] = useState("windows");
  const [osImg1, setOsImg1] = useState("/images/mslogo.png");
  const [osImg2, setOsImg2] = useState("/images/applelogo.png");

  const detectOs = () => {
    if (/Mac/.test(navigator.platform)) {
      setOs("osx");
      setOsImg1("/images/applelogo.png");
      setOsImg2("/images/mslogo.png");
    }
  };

  const downloadPrimary = () => {
    var string;
    if (os === "windows") {
      string = "Downloading windows client";
    } else {
      string = "Downloading OSX client";
    }
    alert(string);
  };

  const downloadSecondary = () => {
    var string;
    if (os === "windows") {
      string = "Downloading OSX client";
    } else {
      string = "Downloading Windows client";
    }
    alert(string);
  };

  useEffect(() => {
    detectOs();
  }, []);

  return (
    <section className="download">
      <div id="dlcontent">
        <div id="dl">
          <div className="logoDiv">
            <img id="logo" src="/images/logo.png" alt="logo" />
            <div id="logoText">
              <h4>Brawl</h4>
              <h4>Gaming</h4>
            </div>
          </div>
          <p id="slogan">
            Brawl Gaming is the ultimate way to earn money while gaming.
          </p>
          <button id="dlBtn" onClick={downloadPrimary}>
            <h3 id="dlText">Download</h3>
            <img className="dlBtnImg" src={osImg1} alt="current os" />
          </button>
          <div className="dlAlt">
            <p id="altTxt">Also available on: </p>
            <img
              className="dlBtnImg"
              id="alt"
              src={osImg2}
              onClick={downloadSecondary}
              alt="alternative os"
            />
          </div>
        </div>
        <div className="computerDiv">
          <img className="computerImg" src="/images/dator.svg" alt="computer" />
          <img className="clientImg" src="/images/app-start.png" alt="client" />
        </div>
      </div>
    </section>
  );
};

export default Download;
