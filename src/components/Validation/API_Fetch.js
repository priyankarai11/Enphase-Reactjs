import { useState } from "react";
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

  const [helperTextPassword, setHelperTextPassword] = useState("");
  const [helperTextEmail, setHelperTextEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.email);
    const key = input.email;
    const value = input.password;

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
          switch (i) {
            case "GS-Authorization":
              sessionStorage.setItem("token", data[i]);
              break;
            case "user_name":
              sessionStorage.setItem("user_name", data[i]);
              break;
            case "account_company_name":
              sessionStorage.setItem("account_company_name", data[i]);
              break;
            case "account_time_zone":
              sessionStorage.setItem("account_time_zone", data[i]);
              break;
            case "roles":
              sessionStorage.setItem("roles", data[i]);
              break;
            default:
              break;
          }
          switch (data[i]) {
            case "Success":
              navigate("/IIC-Dashboard");
              break;
            case "Fail":
              toast(TOAST);
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
    />
  );
}

export default API_Fetch;
