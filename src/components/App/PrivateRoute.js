import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const token = sessionStorage.getItem("auth");
  return token ? children : <Navigate replace to="/" />;
}

export default PrivateRoute;
