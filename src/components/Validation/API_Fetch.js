import { useEffect, useState } from "react";
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
    const key = input.email;
    const value = input.password;
    setIsLoading(true);
    const data = { name: key, password: value };

    fetch(
      ` https://gs-dev.qa-enphaseenergy.com/session-mgr/api/v1/application/login?username=${key}&password=${value}`,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())

      .then((res) => {
        for (let i in res.data) {
          switch (i) {
            case "token":
              sessionStorage.setItem("auth", res.data[i]);
              setIsLoading(false);
              navigate("/iic-dashboard");
              break;
            case "first_name":
              sessionStorage.setItem("user_name", res.data[i]);
              break;
            default:
              break;
          }
        }
        for (let i in res.error) {
          switch (i) {
            case "code":
              if (res.error.code === "400" || res.error.code==="401") {
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

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    switch (name) {
      case "email":
        if (EMAIL_REGEX.test(value) && value.length > 0) {
          setHelperTextEmail(" ");
        } else {
          setHelperTextEmail(EMAIL_ERROR);
        }

        break;

      case "password":
        if (PASSWORD_REGEX.test(value) && value.length > 0) {
          setHelperTextPassword(" ");
        } else {
          setHelperTextPassword(PASSWORD_ERROR);
        }
        break;
      default:
        break;
    }
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
