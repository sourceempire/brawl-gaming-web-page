import React from "react";
import "./signup.scss";

import RegistrationForm from "../registrationForm/RegistrationForm"

const Signup = ({history}) => {
  const createAccount = async e => {
    e.preventDefault();
    alert("created account");
  };

  return (
    <section className="signup">
      <div className="text">
        <h1>Register</h1>
        <p>Why join Brawl Gaming?</p>
        <ul>
          <li>Ready up and join the Brawl Community</li>
          <li>Bet on yourself with or against your friends</li>
          <li>Brawl for the pot</li>
        </ul>
      </div>
      <RegistrationForm history={history}/>
    </section>
  );
};

export default Signup;
