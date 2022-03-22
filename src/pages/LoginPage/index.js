import React from "react";
import Header from "../../components/Header/index.js";
import SignIn from "../../components/Validation/API_Fetch";

function LoginPage() {
  return (
    <div>
      <Header />
      <SignIn />
    </div>
  );
}

export default LoginPage;
