import React, { useState, useEffect } from "react";
import "./download.scss";

const Download = () => {

  const mslogo = "/images/mslogo.png";
  const applelogo = "/images/applelogo.png";
  
  const [os, setOs] = useState("windows");
  const [osImg1, setOsImg1] = useState(mslogo);
  const [osImg2, setOsImg2] = useState(applelogo);

  const detectOs = () => {
    if (/Mac/.test(navigator.platform)) {
      setOs("osx");
      setOsImg1(applelogo);
      setOsImg2(mslogo);
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
    <div className="download">
      <div className="download-wrapper">
        <div className="left-container">
          <div className="left-download-content">
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
            <button id="dlBtn-secondary" onClick={downloadSecondary}>
              <h3 id="dlText">Download</h3>
              <img className="dlBtnImg" src={osImg2} alt="current os" />
            </button>
          </div>
        </div>
        <div className="right-container">
          <div className="right-download-content">
            <img className="computer" src="/images/dator.svg" alt="computer" />
            <video className="clientImg" loop autoPlay muted>
              <source src="/videos/bg.mp4" type="video/mp4" />
              <source src="/videos/bg.mp4" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
