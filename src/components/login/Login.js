import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [active, setActive] = useState(false);

  const login = e => {
    e.preventDefault();
    alert("Logging in");
  };
  return (
    <div className="login">
      <div className="button" onClick={() => setActive(!active)}>
        Log in
      </div>
      <form
        onSubmit={e => login(e)}
        className="form"
        style={{ display: `${active ? "flex" : "none"}` }}
      >
        <input type="email" placeholder="E-Mail" required />
        <input type="password" placeholder="Password" required />
        <input type="submit" value="Log in" />
        <span>
          <Link to="/signup" onClick={() => setActive(!active)}>
            Sign up here
          </Link>
          <Link to="/" onClick={() => setActive(!active)}>
            Forgot password?
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
