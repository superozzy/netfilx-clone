import React from "react";
import { Button } from "react-bootstrap";
import netflixHomepage from "../images/homepageImage.jpg";

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { user, signIn } = UserAuth();
  return (
    <div className="form">
      <img className="form-image" src={netflixHomepage} alt="homepage" />
      <section className="form-signUp">
        <h1 className="form-header">
          <strong>
            Unlimited movies,TV <br />
            shows,and more.
          </strong>
        </h1>
        <p>Watch anywhere.Cancel anytime</p>
        <Link to="/signup">
          <Button bsStyle="danger">Sign Up</Button>
        </Link>
        <div className="form__sign" style={{ marginTop: "1rem" }}>
          <p>Already have an account</p>
          <Link to="/signin" style={{ color: "white" }}>
            Sign in
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
