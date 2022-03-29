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
      "https://gs-dev.qa-enphaseenergy.com/session-mgr/api/v1/admin/signin/",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())

      .then((data) => {
        for (let i in data) {
          switch (i) {
            case "GS-Authorization":
              sessionStorage.setItem("auth", data[i]);
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
              setIsLoading(false);
              navigate("/iic-dashboard");
              break;
            case "Fail":
              setTimeout(() => {
                setIsLoading(false);
                toast.error(TOAST, {
                  className: "toast",
                  position: toast.POSITION.BOTTOM_CENTER,
                });
              }, 1000);

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
