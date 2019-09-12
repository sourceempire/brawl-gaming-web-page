import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./login.scss";
import Fetcher from "../../utils/Fetcher";


const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class Login extends Component {
  state = {
    active: false,
    user: {},
    loggedIn: false,
    username: "",
    password: "",
    usertag: "",
  }

  componentDidMount() {
    Fetcher.get(SERVER_URL + "login/validate", {}) //KOLLAR OM MAN REDAN ÄR INLOGGAD
      .then(() => Fetcher.get(SERVER_URL + "api/user")) //OM MAN LYCKAS LOGGA IN =>  HÄMTAR INFORMATION OM ANVÄNDAREN SOM LOGGATS IN
      .then(user => {
        this.setState({
          user: user,
          loggedIn: true,
        }) 
      })
      .catch(() => {});

      document.addEventListener('click', this.handleClick);
  }


  handleClick = (e) => {
    if (this.state.active) {
      if (!e.target.closest('.login :not(.signup)') && !e.target.closest('.login .form')) {
        this.setState({active: false});
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }
  }
  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  onSubmit = (e) => {
    e.preventDefault();
    Fetcher.get(SERVER_URL + "login/validate", {}) //KOLLAR OM MAN REDAN ÄR INLOGGAD
      .then(res => Fetcher.get(SERVER_URL + "api/logout", {})) //OM MAN ÄR INLOGGAD KOMMER MAN HIT
      .then(res => Fetcher.post(SERVER_URL + "login", { username: this.state.username, password: this.state.password })) //OM MAN ÄR INLOGGAD KOMMER MAN HIT
      .catch(() => Fetcher.post(SERVER_URL + "login", { username: this.state.username, password: this.state.password }))
      .then(() => Fetcher.get(SERVER_URL + "api/user")) //OM MAN LYCKAS LOGGA IN =>  HÄMTAR INFORMATION OM ANVÄNDAREN SOM LOGGATS IN
      .then(user => {
        this.setState({
          user: user,
          loggedIn: true,
          active: false,
        }) 
      }) //HÄR HÄMTAS ANVÄNDARE => SÄTT ATT MAN ÄR INLOGGAD, TA BORT SIGN UP OCH LOG IN OCH LÄGG TILL ANVÄNDARE DÄR ISTÄLLET
      .catch(err => console.log(err));
  };
  logout = (e) => {
    e.preventDefault();
    Fetcher.post(SERVER_URL + 'api/logout', {})//KOLLAR OM MAN REDAN ÄR INLOGGAD
      .then(() => this.setState({
        loggedIn: false,
        active: false,
      }))
  }
  

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  login = () => {
    this.props.checkAuth();
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

   checkiOS = () => {

    var iDevices = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ];
  
    if (!!navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()){ return true; }
      }
    }
  
    return false;
  }

  render(){
    if (!this.state.loggedIn) {
      return (
        <div className="login">
          <div className="button" onClick={this.toggleClass}>
            Log in
          </div>

          <NavLink to="/signup" className="signup" onClick={() => {}}>
            Sign up
          </NavLink>
          
          {this.state.active && (
            <form onSubmit={this.onSubmit} className={this.state.active ? 'form': null} style={{ display: `${this.state.active ? "flex" : "none"}` }}>
              <input type="email" placeholder='Brawl email address' name="username" value={this.state.username} onChange={this.onChange} required />
              <input value={this.state.password} onChange={this.onChange} name="password" type="password" placeholder="Password" required />
              <input type="submit" value="Log in" />
              <span>
                <Link to="/signup" onClick={() => {}}>
                  Sign up here
                </Link>
                <Link to="/" onClick={() => {}}>
                  Forgot password?
                </Link>
              </span>
            </form>)}
        </div>
      );
    } else {
      return (
        <div className="login">
          <div className="button" onTouchStart={this.toggleClass} onClick={this.toggleClass} /*ref={node => { this.node = node; }}*/>
            {this.state.user.usertag}
          </div>
          <div
            className="menu"
            style={{ display: `${this.state.active ? "flex" : "none"}` }}
          >
            <input
              type="submit"
              value="Log out"
              onClick={this.logout}
            />
          </div>
        </div>
      );
    }
  }
}

export default Login;
