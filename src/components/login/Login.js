import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import Fetcher from "../../utils/Fetcher";

const Login = () => {
  const [active, setActive] = useState(false);
  const usernameEl = useRef("");
  const passwordEl = useRef("");

  const login = e => {
    e.preventDefault();
    Fetcher.post("https://brawl-gaming-server.herokuapp.com/login", {
      username: usernameEl.current.value,
      password: passwordEl.current.value
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
        <input ref={usernameEl} type="email" placeholder="E-Mail" required />
        <input
          ref={passwordEl}
          type="password"
          placeholder="Password"
          required
        />
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
