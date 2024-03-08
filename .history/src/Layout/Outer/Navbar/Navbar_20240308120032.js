/** @format */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import { Baseurl, Auth } from "../../../Baseurl";
import axios from "axios";
import Image from "react-bootstrap/Image";
import { SlMenu } from "react-icons/sl";
import "./Navbar.css";
import { OuterSidebar } from "../../../Mod/Modal";
import { NotificationCanvas, NotificationToast } from "../../../Canvas/Canvases";

const Navbar = ({ hamb }) => {
  const [open, setOpen] = useState(false);
  const [showA, setShowA] = useState(false);
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
      <NotificationCanvas show={showD} handleClose={handleCloseD} />
      <OuterSidebar show={open} handleClose={() => setOpen(false)} />
      <NotificationToast show={showA} handleClose={toggleShowA}  /

      <div
        className={
          hamb
            ? "flex  w-full justify-between  my-1 rounded-sm  p-4 py-1 shadow-md items-center  space-x-4"
            : "flex  w-full justify-between my-1 rounded-sm  p-4 py-1 shadow-md items-center   space-x-4"
        }
      >
        <SlMenu className="ham_menu" onClick={() => setOpen(true)} />

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
