/** @format */

import "./login.css";
import { Form, Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Baseurl, showMsg } from "../../Baseurl";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import "./New folder/form.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userId, setUserId] = useState("");

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

  const handleForget = async (e) => {
    e.preventDefault();
    if (showOtp) {
      try {
        const res = await axios.post(`${Baseurl}employee/forgotVerifyOtp`, {
          email,
          otp,
        });
        setUserId(res?.data?.data?.userId);
        setShowOtp(false);
        setShowPassword(true);
        showMsg("Success", "Otp verified successfully", "success");
      } catch (error) {
        showMsg(
          "Error",
          error?.response?.data?.message || "An error occurred",
          "danger"
        );
      }
    } else if (showPassword) {
      try {
        const res = await axios.post(`${Baseurl}employee/changePassword/${userId}`, {
          email,
          otp,
        });
        setShowOtp(false);
        setShowPassword(true);
        showMsg("Success", "Otp verified successfully", "success");
      } catch (error) {
        showMsg(
          "Error",
          error?.response?.data?.message || "An error occurred",
          "danger"
        );
      }
    } else {
      try {
        const res = await axios.post(`${Baseurl}employee/forgetPassword`, {
          email,
        });
        const otp = res?.data?.data?.otp;
        showMsg("Success", otp, "success");
        setShowOtp(true);
      } catch (error) {
        showMsg(
          "Error",
          error?.response?.data?.message || "An error occurred",
          "danger"
        );
      }
    }
  };

  return (
    <>
      <div className="container-login-page">
        <div className="left-div-login-page">
          <Carousel controls={false}>
            <Carousel.Item interval={2000}>
              <Carousel.Caption className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu, sit amet suscipit justo. Integer et
                  augue quis nibh accumsan ornare. Ut id finibus urna, cursus
                  rhoncus nisl. Ut accumsan porttitor mi, sed hendrerit felis
                  rutrum eu. Pellentesque eget velit et ligula volutpat
                  malesuada quis a tellus. Sed sollicitudin sodales pharetra.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <Carousel.Caption className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu, sit amet suscipit justo. Integer et
                  augue quis nibh accumsan ornare. Ut id finibus urna, cursus
                  rhoncus nisl. Ut accumsan porttitor mi, sed hendrerit felis
                  rutrum eu. Pellentesque eget velit et ligula volutpat
                  malesuada quis a tellus. Sed sollicitudin sodales pharetra.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <Carousel.Caption className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu, sit amet suscipit justo. Integer et
                  augue quis nibh accumsan ornare. Ut id finibus urna, cursus
                  rhoncus nisl. Ut accumsan porttitor mi, sed hendrerit felis
                  rutrum eu. Pellentesque eget velit et ligula volutpat
                  malesuada quis a tellus. Sed sollicitudin sodales pharetra.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="right-div-login-page">
          <div>
            <img
              style={{ maxWidth: "155px", maxHeight: "55px" }}
              src="/logo.png"
              alt="logo"
            />
            <p style={{ color: "#0C5C75", marginTop: "2.5rem" }}>
              Employee Panel
            </p>
          </div>

          <div className="Main">
            {forgetPassword ? (
              <Form
                onSubmit={handleForget}
                style={{ marginTop: "2rem", textAlign: "left", width: "100%" }}
              >
                <p>
                  If you have verified the email address for your user account,
                  enter your User ID here and we’ll email you a link to reset
                  your password
                </p>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                {showOtp && (
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="tel"
                      placeholder="Enter OTP"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </Form.Group>
                )}

                {showPassword && (
                  <div>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="tel"
                        placeholder="New Passowrd"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="tel"
                        placeholder="Confirm Passowrd"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                )}

                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <div
                  style={{
                    width: "100%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginTop: "2rem",
                  }}
                >
                  <div className="forget-pass-btns">
                    <Button
                      variant="primary"
                      type="submit"
                      className="sendLink"
                    >
                      SEND LINK
                    </Button>
                    <Button
                      variant="primary"
                      type="button"
                      className="Cancel"
                      onClick={() => setForgetPassword(false)}
                    >
                      Cancel
                    </Button>
                  </div>

                  <p
                    style={{
                      color: "#0C5C75",
                      width: "100%",
                      textAlign: "center",
                      marginTop: "2rem",
                    }}
                  >
                    {" "}
                    If you have not verified your email address, please contact
                    your onsite System Administrator for help resetting your
                    password.
                  </p>

                  <hr style={{ color: "gray" }} />
                  <p style={{ opacity: "60%" }}>
                    By logging in, you agree to the{" "}
                    <span
                      style={{
                        color: "blue",
                        textDecoration: "underline",
                        opacity: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      End User License Agreement
                    </span>{" "}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#0C5C75",
                      fontWeight: "bold",
                      marginTop: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>What’s New</span>
                    <span>Profile Updates</span>
                    <span>Status Page</span>
                  </p>
                </div>
              </Form>
            ) : (
              <Form
                style={{ marginTop: "2rem", textAlign: "left", width: "100%" }}
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="password_input_group">
                  <Form.Control
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />{" "}
                  {show ? (
                    <i
                      class="fa-solid fa-eye-slash"
                      onClick={() => setShow(false)}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-eye"
                      onClick={() => setShow(true)}
                    ></i>
                  )}
                </Form.Group>

                <div
                  style={{
                    width: "100%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginTop: "2rem",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "#0C5C75",
                      color: "white",
                      fontWeight: "bold",
                      marginTop: "1rem",
                      padding: "0.5rem 3.5rem",
                      margin: "auto",
                    }}
                    variant="primary"
                    type="submit"
                  >
                    {loading ? <ClipLoader color="#fff" /> : "Login"}
                  </Button>

                  <button
                    className="forget_password"
                    onClick={() => setForgetPassword(true)}
                  >
                    {" "}
                    Forgot Your Password
                  </button>

                  <hr style={{ color: "gray" }} />
                  <p style={{ opacity: "60%" }}>
                    By logging in, you agree to the{" "}
                    <span
                      style={{
                        color: "blue",
                        textDecoration: "underline",
                        opacity: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      End User License Agreement
                    </span>{" "}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#0C5C75",
                      fontWeight: "bold",
                      marginTop: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>What’s New</span>
                    <span>Profile Updates</span>
                    <span>Status Page</span>
                  </p>
                </div>
              </Form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
