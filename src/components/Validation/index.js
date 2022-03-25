import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Dialog from "../DialogBox";
import "./index.css";

toast.configure();

function Login({
  input,
  handleChange,
  helperTextEmail,
  helperTextPassword,
  handleSubmit,
}) {
  let [isOpen, setIsOpen] = useState(false);
  const [isPasswordShown, setPasswordShown] = useState(false);

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
                  Use your Enlighten Manager credentials to submit applications
                  on behalf of homeowners
                </p>
                <div className="field-group">
                  <TextField
                    value={input.email}
                    className="form-input-fields"
                    id="email"
                    type="email"
                    name="email"
                    label="Email Address"
                    variant="standard"
                    onChange={handleChange}
                    error={helperTextEmail === " " ? false : true}
                    helperText={helperTextEmail}
                  />
                </div>

                <div className="field-group">
                  <TextField
                    value={input.password}
                    className="form-input-fields"
                    id="password"
                    name="password"
                    type={isPasswordShown ? "text" : "password"}
                    label="Password"
                    variant="standard"
                    onChange={handleChange}
                    error={helperTextPassword === " " ? false : true}
                    helperText={helperTextPassword}
                  />
                  <i
                    className="password-icon"
                    onClick={() => setPasswordShown(!isPasswordShown)}
                  >
                    {isPasswordShown ? <FaEye /> : <FaEyeSlash />}
                  </i>
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
                  onClick={handleSubmit}
                >
                  SIGN IN
                </Button>
                <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
                  Invalid Email Address and Password !!!
                </Dialog>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
