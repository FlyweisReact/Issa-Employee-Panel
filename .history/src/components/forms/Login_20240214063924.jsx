/** @format */

import React from "react";
import "./login.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Baseurl, showMsg } from "../../Baseurl";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Keyboard } from "swiper/modules";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${Baseurl}employee/signin`, {
        email,
        password,
      });
      setLoading(false);
      localStorage.setItem("token", res.data.accessToken);
      showMsg("Success", "Welcome ", "success");
      navigate("/dashboard/");
    } catch (error) {
      setLoading(false);
      showMsg(
        "Error",
        error?.response?.data?.message || "An error occurred",
        "danger"
      );
    }
  };

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
  };

  return (
    <>
      {/* <div className="main-div-login Login_div">
      <div className="top-div-login">
        <img className="logo_imag" src={"/Logo/logo.png"} alt="login-banner" />
      </div>
      <div className="bottom-div-login">
        <Form className="login-form" onSubmit={handleSubmit}>
          <h2
            style={{ fontWeight: "bold", fontSize: "1.4rem", color: "black" }}
          >
            Enter Your Credentials to Log In
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={email}
              required
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
              required
            />
          </Form.Group>
          <button className="login-btn" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "Login"}
          </button>
        </Form>
      </div>
    </div> */}
      {/* <div className="Login_page">
        <div className="left">
          <Swiper {...swiperConfig} modules={[Autoplay, Keyboard]}>
            <SwiperSlide key={i}>
              
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}
    </>
  );
};

export default Login;
