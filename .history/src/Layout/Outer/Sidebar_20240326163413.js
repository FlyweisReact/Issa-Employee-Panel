/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import { MainSidebar } from "../../Constant/Constant";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();
  const location = useLocation();

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
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <img
              style={{ maxWidth: "155px", maxHeight: "55px" }}
              src="/logo.png"
              alt=""
            />
          </Link>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {MainSidebar?.map((nav, index) => {
            return (
              <Link
                to={nav.link}
                key={index}
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
                    <img src={nav.newIcon} alt="" />
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
                      <img src={nav.icon} alt="" />
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
