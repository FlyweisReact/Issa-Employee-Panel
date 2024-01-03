import { RiMenu4Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";
import { IoMdClose, IoMdNotifications } from "react-icons/io";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Input from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container style={{ width: "600px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Admin" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="vendor@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Edit
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

const Navbar = ({ hamb, setHamb }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

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
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            Dr,Colter👋!
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
          {/* <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Search" type="search" class="input" />
          </div> */}
          <span className="cursor-pointer text-2xl"></span>
          <figcaption className="tracking-wider pl-1 font-semibold">
            {" "}
            <div className="lg:text-base text-sm text-gray-900  uppercase"></div>
          </figcaption>
        </section>

        <img
          style={{
            width: "35px",
            cursor: "pointer",
            borderRadius: "50%",
            color: "white",
          }}
          src="/Profile/Profile.png"
          alt="notification_off"
        />
        <img
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
