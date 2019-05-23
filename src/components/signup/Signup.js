import React from "react";
import "./signup.scss";

const Signup = () => {
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
      <form className="form" onSubmit={e => createAccount(e)}>
        <input
          className="firstname"
          type="text"
          placeholder="Firstname"
          required
        />
        <input
          className="lastname"
          type="text"
          placeholder="Lastname"
          required
        />
        <input className="email" type="email" placeholder="E-Mail" required />
        <input
          className="password"
          type="password"
          placeholder="Password"
          required
        />
        <input
          className="confirm"
          type="password"
          placeholder="Password"
          required
        />
        <input className="submit" type="submit" value="Create account" />
      </form>
    </section>
  );
};

export default Signup;
