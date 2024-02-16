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

  return (
    <>
      {/* <div className="Login_page">
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
            <div>
              <img src={"/Logo/logo.png"} alt="login-banner" />{" "}
              <p>Employee Panel</p>
            </div>
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
            <button className="login-btn" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Login"}
            </button>
          </Form>
        </div>
      </div> */}

      <div>
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

          <div
            className="right-div-login-page"
            style={{
              backgroundColor: "#D1ECF0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <img
              style={{ maxWidth: "155px", maxHeight: "55px" }}
              src="/logo.png"
              alt="logo"
            />
            <p style={{ color: "#0C5C75", marginTop: "2.5rem" }}>
              Employee Panel
            </p>

            <Form
              style={{ marginTop: "2rem", textAlign: "left", width: "90%" }}
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
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

                <p
                  style={{
                    color: "#0C5C75",
                    width: "100%",
                    textAlign: "center",
                    marginTop: "2rem",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Forgot Your Password
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

            <Form
              style={{
                marginTop: "2rem",
                textAlign: "left",
                width: "90%",
              }}
            >
              <p>
                If you have verified the email address for your user account,
                enter your User ID here and we’ll email you a link to reset your
                password
              </p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User ID</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Verify Otp</Form.Label>
                <Form.Control type="number" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter New Password</Form.Label>
                <Form.Control type="text" placeholder="Enter new password" />
              </Form.Group>

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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
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
                      marginBottom: "1rem",
                    }}
                    variant="primary"
                    type="submit"
                  >
                    SEND LINK
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      color: "#0C5C75",
                      marginTop: "1rem",
                      padding: "0.5rem 3.5rem",
                      margin: "auto",
                      border: "none",
                    }}
                    variant="primary"
                    type="submit"
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

            <p style={{ color: "#0C5C75", fontWeight: "bold" }}>
              Password Reset Sucessfully
            </p>
            <img
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
              }}
              src="/ConnectonForm/LinkSent.png"
              alt="fsf"
            />

            <p
              style={{
                color: "black",
                opacity: "70%",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              Successfull
              <br />
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  opacity: "100%",
                }}
              >
                ....@gmail.com
              </span>
            </p>
            <p style={{ color: "black", opacity: "70%" }}>
              Please Do check the link in Spam folder, if not found in your
              Inbox.
            </p>

            <p style={{ color: "#0C5C75", fontWeight: "bold" }}>Need Help?</p>
            <div>
              <Button
                style={{ marginTop: "1rem", border: "none" }}
                variant="primary"
              >
                GO BACK TO LOGIN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
