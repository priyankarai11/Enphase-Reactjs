import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Validation from "../Validation/index";
import {
  EMAIL_ERROR,
  PASSWORD_ERROR,
  TOAST,
} from "../Utils/Message/messageTypes";
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "../Utils/RegularExpression/constant";

toast.configure();

function API_Fetch() {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [helperTextPassword, setHelperTextPassword] = useState("");
  const [helperTextEmail, setHelperTextEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = input;
    const isValidEmail = validateForm("email", email);
    const isValidPassword = validateForm("password", password);
    if (isValidEmail || isValidPassword) {
      return;
    }
    setIsLoading(true);
    fetch(
      // https://gs-dev.qa-enphaseenergy.com/session-mgr/api/v1/application/login?username=${email}&password=${password}
      `https://gs-stg.qa-enphaseenergy.com/session-mgr/api/v1/application/login?username=${email}&password=${password}`,
      {
        method: "post",
        headers: {
          "Content-Type": "",
          "gs-enphase-auth": null,
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        for (let i in res.data) {
          switch (i) {
            case "token":
              localStorage.setItem("auth", res.data[i]);
              setIsLoading(false);
              navigate("/iic-dashboard");
              break;
            case "first_name":
              localStorage.setItem("user_name", res.data[i]);
              break;
            case "last_name":
              localStorage.setItem("user_name1", res.data[i]);
              break;
            case "is_installer":
              localStorage.setItem("is_installer", res.data[i]);
              break;
            default:
              break;
          }
        }
        for (let i in res.error) {
          switch (i) {
            case "code":
              if (
                res.error.code === "400" ||
                res.error.code === "401" ||
                res.error.code === "503"
              ) {
                setTimeout(() => {
                  setIsLoading(false);
                  toast.error(TOAST, {
                    className: "toast",
                    position: toast.POSITION.BOTTOM_CENTER,
                  });
                }, 1000);
              }
              break;
            default:
              break;
          }
        }
      });
  };

  const validateForm = (name, value) => {
    let hasError = false;
    switch (name) {
      case "email":
        if (EMAIL_REGEX.test(value) && value.length > 0) {
          setHelperTextEmail("");
        } else {
          setHelperTextEmail(EMAIL_ERROR);
          hasError = true;
        }
        break;

      case "password":
        if (value.length > 7) {
          setHelperTextPassword("");
        } else {
          setHelperTextPassword(PASSWORD_ERROR);
          hasError = true;
        }
        break;
      default:
        break;
    }
    return hasError;
  };

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <Validation
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      helperTextEmail={helperTextEmail}
      helperTextPassword={helperTextPassword}
      input={input}
      isLoading={isLoading}
    />
  );
}

export default API_Fetch;
