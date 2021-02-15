import React, { Component } from "react";
import "./PasswordReset.scss";

import Fetcher from "../../utils/Fetcher";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class PasswordReset extends Component {
  state = {
    inputs: {
      password: {
        value: '',
        valid: '', //ENUM: "" = not checked, "valid" = valid, "invalid" = invalid
        error: '',
        regex: RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}/),//RegExp(/^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-_]{5,128}$/),//RegExp(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/),
      },
      confirmpassword: {
        value: '',
        valid: '', //ENUM: "" = not checked, "valid" = valid, "invalid" = invalid
        error: '',
        regex: RegExp(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/),
      },
    },
    submitError: '',
    submitSuccess: '',
  }

  onInputChange = (e) => {
    this.setState({
      inputs: {
          ...this.state.inputs,
          [e.target.name]: {
          ...this.state.inputs[e.target.name],
          value: e.target.value
        }
      }
    });
  }

  liveValidation = (e) => {

    this.setState({
      submitError: '',
      inputs: Object.entries(this.state.inputs).reduce((inputs, [name, value]) => {
        let valid = '';
        let error = '';

        if (name === "confirmpassword") {
          if (value.value === "") {
            // leave empty
          } else if (value.value === this.state.inputs.password.value) {
            valid = 'valid';
          } else {
            valid = 'invalid';
            error = 'Please input same password';
          }

        } else if (name === "password") {
          if (value.value === "") {
            // leave empty
          } else if (value.regex.test(value.value)) {
            valid = 'valid';
          } else {
            valid = 'invalid';
            error = 'Password must contain at least upper case letter and a number';
          }
        }

        inputs[name] = {
          ...value,
          valid: valid,
          error: error,
        };
        return inputs;
      }, {})
    });
  }

  allInputValid = () => Object.values(this.state.inputs).reduce((acc, elem) => acc && elem.valid === 'valid', true);

  sendPasswordResetRequest = (e) => {
    if (this.allInputValid()) {
      
      Fetcher.get(SERVER_URL + 'login/validate')
      .then(res => this.setState({
        submitError: 'You seem to already be logged in'
      }))
      .catch(err => {
        Fetcher.post(SERVER_URL + 'api/public/auth/password/reset/confirm', {
           password: this.state.inputs.password.value,
           token: new URLSearchParams(window.location.href.split('?')[1]).get('token')
        })
        .then(() => {
          this.setState({
            submitSuccess: 'Your password has been restet to the new one',
            submitError: ''
          })
          let a =document.createElement('a');
          a.href  = '/';
          a.click();
        }).catch(err => {
          this.setState({
            submitSuccess: '',
            submitError: err.error
          })
        })
      })
    } else {
      this.setState({
        submitSuccess: '',
        submitError: 'Not all fields are valid'
      });
    }

    e.preventDefault();
  }

  render() {
   return(
     <section className="password-reset">
      <div className="left-register-content">
        <h1>Password Reset</h1>
        <p>You have requested to reset your password. Input new password to continue.</p>
       </div>
      <div className="right-register-content">
        <div className="input-container-reg">
          <input className={"form-input " + this.state.inputs.password.valid} 
                 type="password" 
                 name="password" 
                 placeholder="Password" 
                 onChange={this.onInputChange} 
                 onBlur={this.liveValidation} 
                 autoComplete="off"
                 value={this.state.inputs.password.value}></input>
          <span className="errorMessage">{this.state.inputs.password.error}</span>
        </div>

        <div className="input-container-reg">
          <input className={"form-input " + this.state.inputs.confirmpassword.valid} 
                 type="password"
                 name="confirmpassword"
                 placeholder="Confirm Password"
                 onChange={this.onInputChange}
                 onBlur={this.liveValidation}
                 autoComplete="off"
                 value={this.state.inputs.confirmpassword.value}></input>
          <span className="errorMessage">{this.state.inputs.confirmpassword.error}</span>
        </div>

        <div className="input-container-reg-button">
          <button id="form-submit"
                  className={(this.allInputValid() ? "active" : "")}
                  onClick={this.sendPasswordResetRequest}
           >Set new password</button>
        </div>
        {this.state.submitError !== '' && <div className="submit-error">{ this.state.submitError }</div>}
        {this.state.submitSuccess !== '' && <div className="submit-success">{ this.state.submitSuccess }</div>}
      </div>
    </section>
  );
  }
 }

 export default PasswordReset;