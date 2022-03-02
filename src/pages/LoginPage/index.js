import React from "react";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import SignUp from "../../Validation/index";

function LoginPage() {
  return (
    <div>
      <Header />
      <SignUp />
      <Footer />
    </div>
  );
}

export default LoginPage;
