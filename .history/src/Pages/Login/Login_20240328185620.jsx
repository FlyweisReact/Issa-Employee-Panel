/** @format */

import "./login.css";
import { Form, Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showNotification } from "../../Repository/Apis";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
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
      const res = await axios.post(
        `${process.env.React_App_Baseurl}employee/signin`,
        {
          email,
          password,
        }
      );
      const data = res?.data;
      const profile = JSON.stringify(data?.data);
      localStorage.setItem("user-profile", profile);
      localStorage.setItem("token", data?.accessToken);
      setLoading(false);
      navigate("/dashboard");
      showNotification({ message: "Welcome" });
    } catch (error) {
      setLoading(false);
      const msg = error?.response?.data?.message || "An error occurred";
      showNotification({ message: msg, type: "danger" });
    }
  };

  const handleForget = async (e) => {
    e.preventDefault();
    if (showOtp) {
      try {
        const res = await axios.post(
          `${process.env.React_App_Baseurl}employee/forgotVerifyOtp`,
          {
            email,
            otp,
          }
        );
        setUserId(res?.data?.data?.userId);
        setShowOtp(false);
        setShowPassword(true);
        showNotification({ message: "Otp verified successfully" });
      } catch (error) {
        const msg = error?.response?.data?.message || "An error occurred";
        showNotification({ message: msg, type: "danger" });
      }
    } else if (showPassword) {
      try {
        const res = await axios.post(
          `${process.env.React_App_Baseurl}employee/changePassword/${userId}`,
          {
            newPassword,
            confirmPassword,
          }
        );
        setShowOtp(false);
        setShowPassword(true);
        const msg = res?.data?.message;
        showNotification({ message: msg });
        setForgetPassword(false);
        setShowOtp(false);
        setShowPassword(false);
      } catch (error) {
        const msg = error?.response?.data?.message || "An error occurred";
        showNotification({ message: msg, type: "danger" });
      }
    } else {
      try {
        const res = await axios.post(
          `${process.env.React_App_Baseurl}employee/forgetPassword`,
          {
            email,
          }
        );
        const otp = res?.data?.data?.otp;
        showMsg("Success", otp, "success");
        showNotification({ message: msg });
        setShowOtp(true);
      } catch (error) {
        const msg = error?.response?.data?.message || "An error occurred";
        showNotification({ message: msg, type: "danger" });
      }
    }
  };

  const closeAll = () => {
    setForgetPassword(false);
    setShowOtp(false);
    setShowPassword(false);
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
            <p
              style={{
                color: "#0C5C75",
                marginTop: "2.5rem",
                textAlign: "center",
              }}
            >
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
                  <Form.Label>Email ID </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                {showOtp && (
                  <Form.Group className="mb-3">
                    <Form.Label>OTP </Form.Label>
                    <Form.Control
                      type="tel"
                      name="otp"
                      placeholder="Enter OTP"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </Form.Group>
                )}

                {showPassword && (
                  <div>
                    <Form.Group className="mb-3">
                      <Form.Label>New Password </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="New Passowrd"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password </Form.Label>
                      <Form.Control
                        type="password"
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
                      SUBMIT
                    </Button>
                    <Button
                      variant="primary"
                      type="button"
                      className="Cancel"
                      onClick={() => closeAll()}
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
                  <Form.Label>Email ID </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="password_input_group">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />{" "}
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
                  <Button className="login_btn" variant="primary" type="submit">
                    {loading ? <ClipLoader color="#fff" /> : "Login"}
                  </Button>

                  <button
                    className="forget_password"
                    onClick={() => setForgetPassword(true)}
                  >
                    {" "}
                    Forgot Your Password?
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
