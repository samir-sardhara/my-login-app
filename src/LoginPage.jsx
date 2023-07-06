import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginPage.css";
// import 'bootstrap/dist/css/bootstrap.css';

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginSuccessfull, setLoginSuccessfull] = useState("");
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        " https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/",
        { email, password }
      );

      setLoginSuccessfull("Login Successfully!");

      if (email && password) {
        navigateTo("/formpage");
      }
    } catch (error) {
      if (error.response && error.response.status === 405) {
        setLoginError("Login failed: Method not allowed.");
      } else {
        setLoginError("Login failed. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="login-form-container">
        <h1 className="text-4xl mb-2">Login Page</h1>

        <form className="login-form mt-1" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email ">Email: </label>
            <input
              placeholder="Enter Email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              style={{ marginLeft: "5px" }}
              type="password"
              placeholder="Enter Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {loginSuccessfull && (
          <p className="success-message">{loginSuccessfull}</p>
        )}
        {loginError && <p className="error-message">{loginError}</p>}

        <div>
          <Link to="/ForgotPassword">Forgot Password?</Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
