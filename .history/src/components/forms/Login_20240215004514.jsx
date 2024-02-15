/** @format */

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

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
      delay: 2000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
  };

  return (
    <>
      <div className="Login_page">
        <div className="left">
          <div className="Main">
            <Swiper {...swiperConfig} modules={[Autoplay, Keyboard]}>
              <SwiperSlide>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu, sit amet suscipit justo. Integer et
                  augue quis nibh accumsan ornare. Ut id finibus urna, cursus
                  rhoncus nisl. Ut accumsan porttitor mi, sed hendrerit felis
                  rutrum eu. Pellentesque eget velit et ligula volutpat
                  malesuada quis a tellus. Sed sollicitudin sodales pharetra.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu, sit amet suscipit justo. Integer et
                  augue quis nibh accumsan ornare. Ut id finibus urna, cursus
                  rhoncus nisl. Ut accumsan porttitor mi, sed hendrerit felis
                  rutrum eu. Pellentesque eget velit et ligula volutpat
                  malesuada quis a tellus. Sed sollicitudin sodales pharetra.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="right">
          <Form onSubmit={handleSubmit}>
            <img src={"/Logo/logo.png"} alt="login-banner" />{" "}
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "1.4rem",
                color: "black",
              }}
            >
              Enter Your Credentials to Log In
            </h2>
            <Form.Group>
              <Form.Control
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" Username"
              />
            </Form.Group>
            <Form.Group className="password_input_group">
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <span>
                <i class="fa-solid fa-eye"></i>
              </span>
            </Form.Group>
            <button className="login-btn" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Login"}
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
