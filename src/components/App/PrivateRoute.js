import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const token = sessionStorage.getItem("token");
  return token ? children : <Navigate replace to="/" />;
}

export default PrivateRoute;
