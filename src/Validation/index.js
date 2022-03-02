import React from "react";
import "./index.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Button } from "@mui/material";
import Dialog from "../components/DialogBox";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const passwordRegex = RegExp(
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
);

const formValid = (formErrors) => {
  let valid = true;
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isPasswordShown: false,
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const key = this.email.value;
    const value = this.password.value;

    if (formValid(this.state.formErrors)) {
      const data = { name: key, password: value };
      fetch(
        "https://gs-dev.qa-enphaseenergy.com/session-mgr/api/v1/admin/signin/",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (let i in data) {
            if ("GS-Authorization" === i) {
              let data1 = data[i];
              sessionStorage.setItem("token", data1);
            }
            if ("user_name" === i) {
              let data1 = data[i];
              sessionStorage.setItem("user_name", data1);
            }
            if ("account_company_name" === i) {
              let data1 = data[i];
              sessionStorage.setItem("account_company_name", data1);
            }

            if ("account_time_zone" === i) {
              let data1 = data[i];
              sessionStorage.setItem("account_time_zone", data1);
            }
            if ("roles" === i) {
              let data1 = data[i];
              sessionStorage.setItem("roles", data1);
            }
            if ("Success" === data[i]) {
              this.setState({ isOpen: false });
              window.location.href = "/home";
            } else {
              this.setState({ isOpen: true });
            }
          }
        });
      // .then(() => {

      // })
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          passwordRegex.test(value) && value.length > 0
            ? ""
            : "Invalid Password";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => this.state);
  };

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  render() {
    const { formErrors, isPasswordShown } = this.state;
    return (
      <>
        <section id="intro">
          <div className="container">
            <div className="left-col">
              <h1>Grid Services</h1>
              <p>Intake Portal</p>
            </div>
            <div className="right-col">
              <div className="form-container">
                <form>
                  <h1>Sign In</h1>
                  <span className="enphase_installer">Enphase Installer</span>
                  <p className="enlighten">
                    Use your Enlighten Manager credentials to submit
                    applications on behalf of homeowners
                  </p>
                  <div className="field-group">
                    {/* <label>Email Address</label> */}
                    <input
                      ref={(ref) => {
                        this.email = ref;
                      }}
                      className={formErrors.email.length > 0 ? "error" : null}
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      onChange={this.handleChange}
                      required
                    />

                    {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.email}</span>
                    )}
                  </div>

                  <div className="field-group">
                    {/* <label>Password</label> */}
                    <input
                      ref={(ref) => {
                        this.password = ref;
                      }}
                      className={
                        formErrors.password.length > 0 ? "error" : null
                      }
                      id="password"
                      name="password"
                      type={isPasswordShown ? "text" : "password"}
                      placeholder="Password"
                      onChange={this.handleChange}
                      required
                    />
                    <i
                      className="password-icon"
                      onClick={this.togglePasswordVisiblity}
                    >
                      {isPasswordShown ?  <FaEye />:<FaEyeSlash /> }
                    </i>
                    {formErrors.password.length > 0 && (
                      <span className="errorMessage">
                        {formErrors.password}
                      </span>
                    )}
                  </div>

                  <div className="formlink">
                    <a
                      className="signup"
                      href="https://enlighten-qa4.enphaseenergy.com/manager/registration"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sign Up
                    </a>
                    <a
                      className="form__links"
                      href="https://enlighten-qa4.enphaseenergy.com/forgot_password"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <Button
                    className="submit"
                    type="submit"
                    id="submit"
                    onClick={this.handleSubmit}
                  >
                    SIGN IN
                  </Button>
                  {/* <Dialog
                    isOpen={this.state.isOpen}
                    onClose={() => this.setState({ isOpen: false })}
                  >
                    Invalid Email Address and Password !!!
                  </Dialog> */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
