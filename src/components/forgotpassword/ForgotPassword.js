import React, { Component } from "react";
import "./forgotpassword.scss";

import Fetcher from "../../utils/Fetcher";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class ForgotPassword extends Component {
  state = {
    email: '',
    submitError: ''
  }

  onInputChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  allInputValid = () => this.state.email !== '';

  sendPasswordResetRequest = (e) => {
    if (this.allInputValid()) {
      
      Fetcher.get(SERVER_URL + 'login/validate')
      .then(res => this.setState({
        submitError: 'You seem to already be logged in'
      }))
      .catch(err => {
        Fetcher.post(SERVER_URL + 'api/public/auth/password/reset', {
          email: this.state.email
        })
        .then(() => {
          this.setState({
            submitError: '',
            submitSuccess: 'Please check your inbox for the email. And in case you can\'t find it, check the spam, you never know.',
          })
        }).catch(err => {
          this.setState({
            submitError: err.error,
            submitSuccess: '',
          })
        })
      })
    } else {
      this.setState({
        submitError: 'Please enter an email address'
      });
    }

    e.preventDefault();
  }

  render() {
   return(
     <section className="forgot-password">
      <div className="left-register-content">
        <h1>Forgot password?</h1>
        <p>We can reset it for you. You will receive instruction in your email inbox on how to proceed.</p>
       </div>
      <div className="right-register-content">
        <div className="input-container-reg">
          <input className="form-input"
                 type="text" 
                 name="email" 
                 placeholder="Email" 
                 onChange={this.onInputChange} 
                 value={this.state.email}></input>
        </div>

        <div className="input-container-reg-button">
          <button id="form-submit"
                  className={(this.allInputValid() ? "active" : "")}
                  onClick={this.sendPasswordResetRequest}
           >Reset password</button>
        </div>
        {this.state.submitError !== '' && <div className="submit-error">{ this.state.submitError }</div>}
        {this.state.submitSuccess !== '' && <div className="submit-success">{ this.state.submitSuccess }</div>}
      </div>
    </section>
  );
  }
 }

 export default ForgotPassword;