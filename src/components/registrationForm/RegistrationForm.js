import React, { Component } from 'react';
import lottie from 'lottie-web';
import Fetcher from '../../utils/Fetcher';

import './RegistrationForm.scss';

const SERVER_URL = process.env.REACT_APP_SERVER_URL
/*process.env.REACT_APP_SERVER_URL_FAKE;*/


class RegistrationForm extends Component {
  state = {
    submitFormActive: false,
    loading: false,
    loadingDone: false,
    inputError: false,
    registrated: false,
    registerFormShown: true,
    done: undefined, // lottie animation state
    doneLoadingText: "",
    inputs: {
        usertag: {
          value: '',
          valid: '', //ENUM: "" = not checked, "valid" = valid, "invalid" = invalid
          error: '',
          regex: RegExp(/^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-_]{5,128}$/),
        },
        email: {
          value: '',
          valid: '', //ENUM: "" = not checked, "valid" = valid, "invalid" = invalid
          error: '',
          regex: RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        },
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
        alphakey: {
          value: '',
          valid: '',
          error: '',
          regex: RegExp(/^(?!\s*$).+/)
        }
        
      },
  }

  componentDidMount() {
    Fetcher.get(SERVER_URL + 'login/validate')
    .then(res => {this.props.history.push('/')}) // return to start page if already logged in
    .catch(err => {})

    lottie.loadAnimation({
      container: document.getElementById('loading'),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "loading.json"
    });
    var done = 
    lottie.loadAnimation({
      container: document.getElementById('loadingDone'),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "done.json"
    });
    this.setState({
      done: done,
    });
    this.setAndgetAlphaKey(window.location.href);
  }
    
  onInputChange = (e) => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [e.target.name]: {
          ...this.state.inputs[e.target.name],
          value: e.target.value
        },
      }
    }, () => {
      this.checkConfirmPass();
      this.checkToken();
    });
  }
    
  formIsValid = () => {
      const inputNames = ['usertag', 'email', 'password', 'confirmpassword', "alphakey"]
      
      var inputStatus = [];
      inputNames.forEach(element => {
          inputStatus.push(this.state.inputs[element].valid)
      });
      this.setState({
          submitFormActive: !(inputStatus.includes('invalid') || inputStatus.includes('')),
      })
  }

  setErrorMsgAndInvalid = (inputName, str) => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [inputName]: {
          ...this.state.inputs[inputName],
          valid: "invalid",
          error: str
        },
      },
    }, () => {
      this.formIsValid()
    })
  }

  setInputsValid = (inputName, str) => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [inputName]: {
          ...this.state.inputs[inputName],
          valid: "valid",
          error: ""
        },
      },
    }, () => {
      this.formIsValid()
    })
  }
  checkToken = () => {
    if(this.state.inputs.alphakey.value !== "") {
      this.setState({
        inputs: {
          ...this.state.inputs,
          alphakey: {
            ...this.state.inputs.alphakey,
            valid: 'valid',
            error: ''
          }
        }
      }, () => this.formIsValid())
    }else if (this.state.inputs.alphakey.value === "") {
      this.setState({
        inputs: {
          ...this.state.inputs,
          alphakey: {
            ...this.state.inputs.alphakey,
            valid: '',
            error: ''
          }
        }
      }, () => this.formIsValid())
    }
  }

  setAndgetAlphaKey = (url) => {
    const alphaKeyMatch = url.match(/.?alpha-key=([A-Za-z0-9]+\.[A-Za-z0-9]+\.?[A-Za-z0-9-_.+=]*$)/i);
    if(alphaKeyMatch !== null) {
      const alphaKeyInvite = alphaKeyMatch[1];
    this.setState({
      inputs: {
        ...this.state.inputs,
        alphakey: {
          ...this.state.inputs.alphakey,
          value: alphaKeyInvite,
          valid: 'valid',
          }
      }
    })
    }else {
      this.setState({
        inputs: {
          ...this.state.inputs,
          alphakey: {
            ...this.state.inputs.alphakey,
            value: "",
            }
        }
      })
    }
  }

  checkConfirmPass() {
    if ((this.state.inputs.confirmpassword.value === this.state.inputs.password.value) && this.state.inputs.password.valid === 'valid') {
      this.setState({
        inputs: {
          ...this.state.inputs,
          confirmpassword: {
            ...this.state.inputs.confirmpassword,
            valid: 'valid',
            error: ''
          }
        }
      }, () => this.formIsValid())
    } else if ((this.state.inputs.confirmpassword.value !== this.state.inputs.password.value) && this.state.inputs.confirmpassword.valid === 'valid' && this.state.inputs.password.value !== "") {
      this.setState({
        inputs: {
          ...this.state.inputs,
          confirmpassword: {
            ...this.state.inputs.confirmpassword,
            valid: 'invalid',
            error: 'Must match password'
          }
        }
      })
    } else if ((this.state.inputs.confirmpassword.value !== this.state.inputs.password.value) && this.state.inputs.password.value === '' || this.state.inputs.confirmpassword === ''){
      this.setState({
        inputs: {
          ...this.state.inputs,
          confirmpassword: {
            ...this.state.inputs.confirmpassword,
            valid: '',
            error: ''
          }
        }
      })
    }
  }

  liveValidation = (e) => {
      if (e.target.name !== "confirmpassword") {
        if (e.target.value === "") {
          this.setState({
            inputs: {
              ...this.state.inputs,
              [e.target.name]: {
                ...this.state.inputs[e.target.name],
                valid: "",
                error: ""
              },
            },
          }, () => {

            this.formIsValid()
            
          })
        } else if (this.state.inputs[e.target.name].regex.test(e.target.value)) {
          if(e.target.name === "usertag"){
            this.setInputsValid(e.target.name, "")
          } else if (e.target.name === "email") {
            this.setInputsValid(e.target.name, "")
          } else if (e.target.name === "password") {
            this.setInputsValid(e.target.name, "")
          } else if (e.target.name === "alphakey") {
            this.setInputsValid(e.target.name, "")
          }
        
        } else {
          if(e.target.name === "usertag"){
            this.setErrorMsgAndInvalid(e.target.name, "Username must be longer than 5 characters");
          } else if (e.target.name === "email") {
            this.setErrorMsgAndInvalid(e.target.name, "Email must contain @ and .");
          } else if (e.target.name === "password") {
            this.setErrorMsgAndInvalid(e.target.name, "Password must contain upper case and number");
          } else if (e.target.name === "alphakey") {
            this.setErrorMsgAndInvalid(e.target.name, "Wrong alpha key");
          }
        }
      } else {
        if (e.target.value === "") {
          this.setState({
            inputs: {
              ...this.state.inputs,
              [e.target.name]: {
                ...this.state.inputs[e.target.name],
                valid: "",
              }
            }
          }, () => {
            this.formIsValid()
          })
        } else if (e.target.value === this.state.inputs.password.value && this.state.inputs.password.valid === "valid") {
          this.setState({
            inputs: {
              ...this.state.inputs,
              [e.target.name]: {
                ...this.state.inputs[e.target.name],
                valid: "valid",
              }
            }
          }, () => {
            this.formIsValid()
          })
        } else {
          this.setState({
            inputs: {
              ...this.state.inputs,
              [e.target.name]: {
                ...this.state.inputs[e.target.name],
                valid: "invalid",
              }
            },
          }, () => {
            this.formIsValid()
          })
        }
      }
  }

  onEmailSubmit = (e) => {
    e.preventDefault();
    Fetcher.get(SERVER_URL + 'login/validate')
    .then(res => {})
    .catch(err => {
      Fetcher.post(SERVER_URL + 'registeralpha', {
        username: this.state.inputs.email.value, 
        password: this.state.inputs.password.value,
        usertag: this.state.inputs.usertag.value,
        "alpha-key": this.state.inputs.alphakey.value,
        /*first_name: "Admin",
        last_name: "Admin",
        age: "19900000000",
        street_address: "Admin",
        postal_code: "90000",
        city: "Admin",
        state: "Admin",
        country: "sve",*/
        
        
      })
      .then(() => {
        this.setState({
          registered: true,
          loading: false,
          loadingDone: true,
          doneloadingtext: "ACCOUNT CREATED",
        })
        this.state.done.play()
        this.props.history('/');
      }).catch(err => {
        if (err) {//.error === "Not valid jwt") {
          this.setState({
            registered: false,
            loading: false,
            loadingDone: false,
            inputs:{
              ...this.state.inputs,
              alphakey:{
                ...this.state.inputs.alphakey,
                error: "Wrong alpha key",
                valid: "invalid"
              }
            }
          });
          
        } else if (err.error ==="User already exists") {
          this.setState({
            registered: false,
            loading: false,
            loadingDone: false,
            inputs:{
              ...this.state.inputs,
              email:{
                ...this.state.inputs.email,
                error: "Email already exists",
                valid: "invalid"
              }
            }
          });
        }
      })
    })
  }

  clearState = () => {
    this.setState({
      registered: false,
      registerFormShown: true,
      inputs: {
        usertag: {
          value: '',
          valid: '', //ENUM: "" = not checked, "valid" = valid, "invalid" = invalid
          error: '',
          regex: RegExp(/^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-_]{5,128}$/),
        },
        email: {
          value: '',
          valid: '', //ENUM: "" = not checked, "valid" = valid, "invalid" = invalid
          error: '',
          regex: RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        },
        password: {
          value: '',
          valid: '', //ENUM: "" = not checked, "valid" = valid, "invalid" = invalid
          error: '',
          regex: RegExp(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/),
        },
        confirmpassword: {
          value: '',
          valid: '', //ENUM: "" = not checked, "valid" = valid, "invalid" = invalid
          error: '',
          regex: RegExp(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/),
        },
        alphakey:{
          value: '',
          valid: '',
          error: '',
        }
        
      },
      loadingDone: false,
      submitFormActive: false,
    })
  }
    
    
  render() {
    return (
      <div className="registration-form-container">
        <div id="loading" className={"loading " + (this.state.loading ? "active": "")} />
        <div id="loadingDone" className={"loadingDone " + (this.state.loadingDone ? "active": "")} />
        {!this.state.registered ?
          <div className={"form-container " + (this.state.loading ? "inactive": "")}>
            <React.Fragment>
              <div className="input-container-reg">
                <input className={"form-input " + ((this.state.inputs.usertag.valid === "valid") ? "valid": "") + ((this.state.inputs.usertag.valid === "invalid") ? "invalid": "")} id="usertag-input" type="text" name="usertag" placeholder="Username" onChange={this.onInputChange} onBlur={this.liveValidation} autoComplete="off" value={this.state.inputs.usertag.value}></input>
                <span className="errorMessage">{this.state.inputs.usertag.error}</span>
              </div>
              <div className="input-container-reg">
                <input className={"form-input " + ((this.state.inputs.email.valid === "valid") ? "valid": "") + ((this.state.inputs.email.valid === "invalid") ? "invalid": "")} id="email-input" type='text' name="email" placeholder="E-mail" onChange={this.onInputChange} onBlur={this.liveValidation} autoComplete="off" value={this.state.inputs.email.value}></input>
                <span className="errorMessage">{this.state.inputs.email.error}</span>
              </div>
              <div className="input-container-reg">
                <input className={"form-input " + ((this.state.inputs.password.valid === "valid") ? "valid": "") + ((this.state.inputs.password.valid === "invalid") ? "invalid": "")} id="password-input" type='password' name="password" placeholder="Password" onChange={this.onInputChange} onBlur={this.liveValidation} autoComplete="off" value={this.state.inputs.password.value}></input>
                <span className="errorMessage">{this.state.inputs.password.error}</span>
              </div>
              <div className="input-container-reg">
                <input className={"form-input " + 
                    ((this.state.inputs.confirmpassword.valid === "valid") ? "valid": "") + 
                    ((this.state.inputs.confirmpassword.valid === "invalid") ? "invalid": "")} 
                  id="confirm-password-input" 
                  type='password' 
                  name="confirmpassword" 
                  placeholder="Confirm Password" 
                  onChange={this.onInputChange} 
                  onBlur={this.liveValidation} 
                  automplete="off" 
                  value={this.state.inputs.confirmpassword.value} />
                <span className="errorMessage">{this.state.inputs.confirmpassword.error}</span>
              </div>
              <div className="input-container-reg">
                <input className={"form-input " + ((this.state.inputs.alphakey.valid === "valid") ? "valid": "") + ((this.state.inputs.alphakey.valid === "invalid") ? "invalid": "")} id="api-key-input" type='text' name="alphakey" placeholder="API-KEY" onChange={this.onInputChange} onBlur={this.liveValidation} autoComplete="off" value={this.state.inputs.alphakey.value}></input>
                <span className="errorMessage">{this.state.inputs.alphakey.error}</span>
              </div>
              <div className="input-container-reg-button">
                <button id="form-submit" className={(this.state.submitFormActive ? "active" : "")} onClick={this.state.submitFormActive ? (e) => {this.onEmailSubmit(e); this.setState({loading: true})} : () => {}}>Create Account</button>
              </div>
            </React.Fragment>
          </div>
            :  
            <React.Fragment>
              <div className="done-loading-container">
                <p className="interest-text">{this.state.doneloadingtext}</p>
                <button className="register-new-button" onClick={() => {
                  this.state.done.stop()
                  this.clearState()
                }}>Let´s Brawl</button>
            </div>
          </React.Fragment>
        }
      </div>
    )
  }
}
export default RegistrationForm;