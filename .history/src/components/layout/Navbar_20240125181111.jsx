/** @format */
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import "./Navbar.css";
import Toast from "react-bootstrap/Toast";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Baseurl, Auth } from "../../Baseurl";
import axios from "axios";
import Image from "react-bootstrap/Image";

const Navbar = ({ hamb }) => {
  const [open, setOpen] = useState(false);

  const [showA, setShowA] = useState(false);
  const drColterRef = useRef(null);
  const navigate = useNavigate();
  //
  const [showD, setShowD] = useState(false);

  const handleCloseD = () => setShowD(false);
  const handleShowD = () => setShowD(true);
  const toggleShowA = () => setShowA(!showA);

  const notify = () => {
    setShowA(!showA);
  };

  const [employeeData, setEmployeeData] = useState({});

  const getEmployeeData = () => {
    axios.get(`${Baseurl}employee/getProfile`, Auth()).then((res) => {
      setEmployeeData(res.data.data);
    });
  };
  useEffect(() => {
    getEmployeeData();
  }, []);
  return (
    <>
      {" "}
      <Offcanvas placement="end" show={showD} onHide={handleCloseD}>
        <Offcanvas.Body>
          <img
            onClick={() => setShowD(false)}
            src="/back_button2.png"
            style={{ cursor: "pointer", maxWidth: "35px", width: "auto" }}
            alt="fdn"
          />
          <div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "2rem",
                fontSize: ".3rem",
              }}
            >
              <Form.Group
                className="mb-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#1A9FB2",
                  opacity: "40%",
                  borderRadius: "8px",
                }}
                controlId="formBasicEmail"
              >
                <img
                  style={{ maxWidth: "40px", width: "auto", height: "25px" }}
                  src="/chat1.png"
                  alt="fdn"
                />
                <Form.Select
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "#1A9FB2",
                    opacity: "100%",
                    borderRadius: "8px",
                    color: "#A9FBF2",
                  }}
                  aria-label="Default select example"
                >
                  <option> Staff</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "red",
                  opacity: "40%",
                  borderRadius: "8px",
                }}
                controlId="formBasicEmail"
              >
                <img
                  style={{
                    maxWidth: "40px",
                    width: "auto",
                    height: "25px",
                    padding: ".2rem",
                  }}
                  src="/chat2.png"
                  alt="fdn"
                />
                <Form.Select
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "red",
                    opacity: "99%",
                    borderRadius: "8px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  aria-label="Default select example"
                >
                  <option> Center 1</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              borderRadius: "8px",
              padding: ".2rem 1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginBottom: "2.5rem",
            }}
          >
            <img
              style={{
                borderRadius: "50%",
                border: "1px solid black",
                maxWidth: "50px",
                maxHeight: "50px",
                width: "auto",
                height: "auto",
              }}
              src="/chat1.png"
              alt="fdn"
            />
            <span style={{ lineHeight: ".9rem" }}>
              <p style={{ fontWeight: "bold", paddingTop: "15px" }}>
                Naina Jhonson
              </p>
              <p style={{ opacity: "60%" }}>Have you check your appointment</p>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              borderRadius: "8px",
              padding: ".2rem 1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginBottom: "2.5rem",
            }}
          >
            <img
              style={{
                borderRadius: "50%",
                border: "1px solid black",
                maxWidth: "50px",
                maxHeight: "50px",
                width: "auto",
                height: "auto",
              }}
              src="/chat1.png"
              alt="fdn"
            />
            <span style={{ lineHeight: ".9rem" }}>
              <p style={{ fontWeight: "bold", paddingTop: "15px" }}>
                Naina Jhonson
              </p>
              <p style={{ opacity: "60%" }}>Have you check your appointment</p>
            </span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>{" "}
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "70px",
            right: "13px",
            zIndex: "1000",
            backgroundColor: "white",
            maxWidth: "310px",
          }}
        >
          <Toast style={{ zIndex: "1" }} show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Notifications</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <hr />
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </div>
      </div>
      <div
        className={
          hamb
            ? "flex  w-full justify-between  my-1 rounded-sm  p-4 py-1 shadow-md items-center  space-x-4"
            : "flex  w-full justify-between my-1 rounded-sm  p-4 py-1 shadow-md items-center   space-x-4"
        }
      >
        <div
          style={{
            lineHeight: "1rem",
            width: "150px",
          }}
        >
          <p style={{ fontSize: "1.2rem" }}>Hello,</p>
          <p
            ref={drColterRef}
            id="drColter"
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              cursor: window.innerWidth < 768 ? "pointer" : "default",
            }}
          >
            {employeeData?.fullName}👋!
          </p>
        </div>

        {/* Profile */}
        <section className="flex sm:ml-auto justify-end sm:w-full items-center space-x-2  pr-2">
          <Form.Control
            type="search"
            placeholder="Search"
            className="position-relative pl-4 d-none d-md-block"
            style={{
              backgroundColor: "#1A9FB2",
              color: "white",
            }}
            aria-label="Search"
          />

          <span className="cursor-pointer text-2xl"></span>
          <figcaption className="tracking-wider pl-1 font-semibold">
            {" "}
            <div className="lg:text-base text-sm text-gray-900  uppercase"></div>
          </figcaption>
        </section>

        <Image
          src={employeeData?.profilePic}
          className="profile_img"
          roundedCircle
          onClick={() => navigate("/profile")}
        />
        <Image
          src="/Navbar/chat.png"
          className="navbar-notify-image"
          onClick={handleShowD}
        />
        <Image
          src="/notify.svg"
          className="navbar-notify-image"
          onClick={notify}
        />
      </div>
    </>
  );
};

export default Navbar;
