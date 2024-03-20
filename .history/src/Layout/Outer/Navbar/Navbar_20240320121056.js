/** @format */
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Image from "react-bootstrap/Image";
import { SlMenu } from "react-icons/sl";
import "./Navbar.css";
import { OuterSidebar } from "../../../Mod/Modal";
import {
  NotificationCanvas,
  NotificationToast,
} from "../../../Canvas/Canvases";
import { getData } from "../../../components/api/api";

const imgUrl =
  "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1710916807~exp=1710920407~hmac=ba4f8620de76cb8c5dc2e0e05c1ab5e6a22916c0837d1b919528f55ee1a1b968&w=740";

const Navbar = ({ hamb }) => {
  const [open, setOpen] = useState(false);
  const [showA, setShowA] = useState(false);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState({});
  const [show, setShow] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [showD, setShowD] = useState(false);
  const navigate = useNavigate();
  const handleCloseD = () => setShowD(false);
  const handleShowD = () => setShowD(true);
  const toggleShowA = () => setShowA(!showA);

  const notify = () => {
    setShowA(!showA);
  };

  const debouncedSetQuery = (term) => {
    clearTimeout(debouncedSetQuery.timeoutId);
    debouncedSetQuery.timeoutId = setTimeout(() => {
      setQuery(term);
    }, 500);
  };
  const fetchUsers = () => {
    getData(setUsers, `employee/getPatient?search=${query}`);
  };
  useEffect(() => {
    if (query) {
      fetchUsers();
      setShow(true);
    }
  }, [query]);

  useEffect(() => {
    if (searchActive) {
      setShow(true);
    }
  }, [searchActive]);

  const showSearch = show === true && users?.data?.length > 0;
  const searchContainerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShow(false);
        setSearchActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const profileData = JSON.parse(localStorage.getItem("user-profile"));
  return (
    <>
      <NotificationCanvas show={showD} handleClose={handleCloseD} />
      <OuterSidebar show={open} handleClose={() => setOpen(false)} />
      <NotificationToast show={showA} handleClose={toggleShowA} />
      {show && <div id="nav-cover"></div>}
      <div
        className={
          hamb
            ? "flex  w-full justify-between  mt-1 rounded-sm  p-4 py-1 shadow-md items-center  space-x-4 Main_Nav mb-5"
            : "flex  w-full justify-between mt-1 mb-5 rounded-sm  p-4 py-1 shadow-md items-center   space-x-4 Main_Nav"
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
            {profileData?.fullName}👋
          </p>
        </div>

        {/* Profile */}
        <section className="search-container" ref={searchContainerRef}>
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => debouncedSetQuery(e.target.value)}
            onClick={() => setSearchActive(true)}
          />
          {showSearch && (
            <div className="Search_results">
              <ul>
                {users?.data?.map((i, index) => (
                  <li key={index}>
                    <Link to={`/search-list/${i._id}`}> {i.fullName} </Link>{" "}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
        {profileData?.profilePic ? (
          <Image
            src={profileData?.profilePic}
            className="profile_img"
            roundedCircle
            onClick={() => navigate("/profile")}
          />
        ) : (
          <Image
            src={imgUrl}
            className="profile_img"
            roundedCircle
            onClick={() => navigate("/profile")}
          />
        )}
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
