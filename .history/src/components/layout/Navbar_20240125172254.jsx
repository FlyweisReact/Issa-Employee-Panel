/** @format */

import { RiMenu4Line, RiSearchLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";
import { IoMdClose, IoMdNotifications } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Input from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { Store } from "react-notifications-component";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Baseurl, Auth } from "../../Baseurl";
import axios from "axios";


const Navbar = ({ hamb, setHamb }) => {
  const [modalShow, setModalShow] = useState(false);
  const [showA, setShowA] = useState(false);
  const drColterRef = useRef(null);
  const navigate = useNavigate();
  //
  const [showD, setShowD] = useState(false);

  const handleCloseD = () => setShowD(false);
  const handleShowD = () => setShowD(true);
  //
  const [showC, setShowC] = useState(false);

  const handleClose = () => setShowC(false);
  const handleShowC = () => setShowC(true);

  const sidebarData = [
    {
      icon: <img src="/Dashboard/home.png" alt="fdn" />,
      link: "/dashboard/",
      name: "Home",
      newIcon: <img src="/Dashboard/New folder/home.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard/icon.png" alt="fdn" />,
      link: "/employment/",
      name: "Employment Information",
      newIcon: <img src="/Dashboard/New folder/icon.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard/group.png" alt="fdn" />,
      link: "/assigned-patient/",
      name: "Assigned Patients",
      newIcon: <img src="/Dashboard/New folder/group.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard/user.png" alt="fdn" />,
      link: "/profile/",
      name: "Profile",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
  ];
  useEffect(() => {
    const handleClick = () => {
      setShowC(true);
    };

    const handleResize = () => {
      if (window.innerWidth < 768 && drColterRef.current) {
        drColterRef.current.addEventListener("click", handleClick);
      } else if (drColterRef.current) {
        drColterRef.current.removeEventListener("click", handleClick);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (drColterRef.current) {
        drColterRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);
  //
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
      <Offcanvas style={{ width: "70%" }} show={showC} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "40px",
            }}
          >
            {sidebarData.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: window.innerWidth < 768 ? "350px" : "auto",
                  width: "auto",
                }}
              >
                <span style={{ marginRight: "10px" }}>{item.newIcon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
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

        <img
          onClick={() => navigate("/employee/Dashboard")}
          style={{
            width: "35px",
            cursor: "pointer",
            borderRadius: "50%",
            color: "white",
          }}
          src={employeeData?.profilePic}
          alt="notification_off"
        />
        <img
          onClick={handleShowD}
          style={{
            width: "35px",
            cursor: "pointer",
            backgroundColor: "#1A9FB2",
            padding: ".4rem",
            borderRadius: "8px",
            color: "white",
          }}
          src="/Navbar/chat.png"
          alt="notification_off"
        />
        <img
          onClick={notify}
          style={{
            width: "35px",
            cursor: "pointer",
            backgroundColor: "#1A9FB2",
            padding: ".4rem",
            borderRadius: "8px",
            color: "white",
          }}
          src="/Navbar/notification off.png"
          alt="notification_off"
        />
      </div>
    </>
  );
};

export default Navbar;
