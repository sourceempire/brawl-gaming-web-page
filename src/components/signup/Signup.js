import React from "react";
import "./Signup.scss";

import RegistrationForm from "../registrationform/RegistrationForm"

const Signup = ({history}) => {
  
  const createAccount = async e => {
    e.preventDefault();
    alert("created account");
  };

  return (
    <section className="register">
      <div className="register-content-wrapper">
        <div className="left-register-content">
          <div className="SU">
            <h1>Register</h1>
            <p>Why join Brawl Gaming?</p>
            <ul>
              <li>Ready up and join the Brawl Community</li>
              <li>Bet on yourself with or against your friends</li>
              <li>Brawl for the pot</li>
            </ul>
          </div>
        </div>
        <div className="right-register-content">
          <RegistrationForm history={history}/>
        </div>
      </div>
    </section>
  );
};

export default Signup;
