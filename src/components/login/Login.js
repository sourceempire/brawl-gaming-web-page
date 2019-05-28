import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./login.scss";
import Fetcher from "../../utils/Fetcher";

const Login = ({ loggedIn, setLoggedIn }) => {
  const SERVER_URL = "https://brawl-gaming-server.herokuapp.com/";
  const [active, setActive] = useState(false);
  const [user, setUser] = useState([]);
  const usernameEl = useRef("");
  const passwordEl = useRef("");

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const login = e => {
    e.preventDefault();
    const params = {
      username: usernameEl.current.value,
      password: passwordEl.current.value
    };
    Fetcher.get(SERVER_URL + "login/validate", {}) //KOLLAR OM MAN REDAN ÄR INLOGGAD
      .then(res => {
        setLoggedIn(true);
      }) //OM MAN ÄR INLOGGAD KOMMER MAN HIT
      .catch(() => {
        //OM MAN INTE ÄR INLOGGAD KOMMER MAN HIT
        Fetcher.post(SERVER_URL + "login", params);
      }) //OM MAN INTE ÄR INLOGGAD => LOGGA IN
      .then(() => Fetcher.get(SERVER_URL + "api/user")) //OM MAN LYCKAS LOGGA IN =>  HÄMTAR INFORMATION OM ANVÄNDAREN SOM LOGGATS IN
      .then(user => {
        setUser(user);
        setActive(false);
        setLoggedIn(true);
      }) //HÄR HÄMTAS ANVÄNDARE => SÄTT ATT MAN ÄR INLOGGAD, TA BORT SIGN UP OCH LOG IN OCH LÄGG TILL ANVÄNDARE DÄR ISTÄLLET
      .catch(err => console.log(err));
  };

  if (!loggedIn) {
    return (
      <div className="login">
        <div className="button" onClick={() => setActive(!active)}>
          Log in
        </div>
        <NavLink to="/signup" className="signup" onClick={() => scrollToTop()}>
          Sign up
        </NavLink>
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
  } else {
    return (
      <div className="login">
        <div className="button" onClick={() => setActive(!active)}>
          {user.usertag}
        </div>
        <div
          className="menu"
          style={{ display: `${active ? "flex" : "none"}` }}
        >
          <input
            type="submit"
            value="Log out"
            onClick={() => {
              setActive(false);
              setLoggedIn(false);
            }}
          />
        </div>
      </div>
    );
  }
};

export default Login;
