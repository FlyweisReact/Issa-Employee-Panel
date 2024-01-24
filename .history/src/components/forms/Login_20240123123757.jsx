/** @format */

import React from "react";
import "./login.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Baseurl, showMsg } from "../../Baseurl";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = axios.post(`${Baseurl}employee/signin`, {
        email: email,
        password: password,
      });
      setLoading(false);
      localStorage.setItem("token", res.data.accessToken);
      showMsg("Success", res.data.msg, "success");
      setLoading(false);
      navigate("/dashboard/");
      setLoading(false);
    } catch (error) {
      showMsg(
        "Error",
        error?.response?.data?.message || "An error occurred",
        "danger"
      );

   
    }
  };

  return (
    <div className="main-div-login Login_div">
      <div className="top-div-login">
        <img className="logo_imag" src={"/Logo/logo.png"} alt="login-banner" />
      </div>
      <div className="bottom-div-login">
        <Form className="login-form">
          <h2
            style={{ fontWeight: "bold", fontSize: "1.4rem", color: "black" }}
          >
            Enter Your Credentials to Log In
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <button className="login-btn" onClick={handleSubmit}>
            Login
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
