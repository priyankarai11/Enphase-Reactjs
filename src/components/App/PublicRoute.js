import { Navigate } from "react-router";
import Validation from "../../pages/LoginPage/index";

function PublicRoute() {
  const token = sessionStorage.getItem("auth");
  if (token && token !== "undefined") {
    return <Navigate replace to="/iic-dashboard" />;
  } else return <Validation />;
}

export default PublicRoute;
