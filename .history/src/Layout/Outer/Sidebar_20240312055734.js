/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { toast } from "react-toastify";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const nav = [
    {
      icon: <img src="/Dashboard/home.png" alt="fdn" />,
      link: "/dashboard",
      name: "Home",
      newIcon: <img src="/Dashboard/New folder/home.png" alt="fdn" />,
    },
    {
      icon: <img src="/book.svg" alt="" />,
      link: "/employee/patient-chart",
      name: "Menu",
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
    {
      icon: <img src="/tlist.png" alt="fdn" />,
      link: "/patient-list/",
      name: "Patient List",
      newIcon: <img src="/list.png" alt="fdn" />,
    },
  ];

  const logOut = () => {
    navigate("/");
    toast.success("Log -Out Successful");
  };

  return (
    <>
      <aside
        style={{ height: "110vh", alignItems: "center" }}
        className="p-4 sm:bg-[rgb(26,159,178)]"
      >
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        {/* Logo */}
        <figure className="flex  flex-col items-center">
          <Link to="/dashboard" sty >
            <span
              style={{ fontSize: "2rem" }}
              className="font-bold text-white text-2xl"
            >
              Logo
            </span>
          </Link>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link
                to={nav.link}
                key={nav.name}
                className=""
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    alignItems: "center",
                    width: "30%",
                    margin: "auto",
                    borderBottom: "none",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                  }}
                >
                  {location.pathname === nav.link ? (
                    nav.newIcon
                  ) : (
                    <span
                      style={{
                        width: "80%",
                        borderRadius: "50%",
                        backgroundColor:
                          location.pathname === nav.link ? "white" : "none",
                        borderBottom: "none",
                      }}
                      className="my-3 cursor-pointer text-gray-900 tracking-wider p-2 rounded-sm"
                    >
                      {nav.icon}
                    </span>
                  )}
                  {location.pathname === nav.link && (
                    <span
                      style={{
                        color: "white",
                        borderBottom: "none",
                        textOverflow: "wrap",
                        fontSize: "0.9rem",
                        textDecoration: "none",
                      }}
                    >
                      {nav.name}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
          <span
            style={{ width: "100%", margin: "auto" }}
            className="flex my-3 items-center cursor-pointer text-gray-900
            tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
          >
            <BiLogOutCircle
              style={{
                width: "90%",
                fontSize: "2.3rem",
                marginTop: "2rem",
                color: "white",
              }}
              className="text-xl mr-3"
            />
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
