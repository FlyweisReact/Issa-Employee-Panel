/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiLogOutCircle, BiCategory } from "react-icons/bi";
import { TbDiscount } from "react-icons/tb";
import { FaProductHunt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

import { MdDashboardCustomize } from "react-icons/md";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

const Sidebar2 = ({ hamb, setHamb }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const nav = [
    {
      icon: <img src="/Dashboard2/1.png" alt="fdn" />,
      link: "/employee/Dashboard",
      name: "Employment Application ",
      newIcon: <img src="/Dashboard/New folder/home.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/2.png" alt="fdn" />,
      link: "/employee/group-notes",
      name: "Group Notes",
      newIcon: <img src="/Dashboard2/training.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/training.png" alt="fdn" />,
      link: "/employee/training",
      name: "Training",
      newIcon: <img src="/Dashboard/New folder/group.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/patitent-assigned.png" alt="fdn" />,
      link: "/assigned-patient/",
      name: "Assigned Patient",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/time-off.png" alt="fdn" />,
      link: "/employee/time-of-request",
      name: "Time Off Request",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/1.png" alt="fdn" />,
      link: "/employee/time-sheet",
      name: "Time Sheet/Employee Schedule",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/performance.png" alt="fdn" />,
      link: "/employee/employee-performance",
      name: "Employee Performance",
      newIcon: <img src="/public/Dashboard2/performance.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/user.png" alt="fdrn" />,
      link: "/employee/employee-tracking",
      name: "Employee Tracking/ Upload",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/chart.png" alt="fdn" />,
      link: "/employee/patient-chart ",
      name: "Patient Chart",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/vitals.png" alt="fdn" />,
      link: "/employee/vitals",
      name: "Patient Vitals",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/user.png" alt="fdn" />,
      link: "/employee/patient-tracking",
      name: "Patient Tracking",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/medication.png" alt="fdn" />,
      link: "/employee/medications",
      name: "Medications",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/setting.png" alt="fdn" />,
      link: "/employee/settings",
      name: "Settings",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
  ];

  const logOut = () => {
    navigate("/");
    toast.success("Log -Out Successful");
  };
  return (
    <>
      <aside
        style={{ height: "auto", alignItems: "center" }}
        className="p-4 sm:bg-[#1A9FB2]"
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
          <span
            style={{
              textAlign: "center",
              lineHeight: ".1rem",
            }}
            className="font-bold text-white text-2xl"
          >
            <img
              style={{
                maxWidth: "80px",
                width: "auto",
                margin: "auto",
                marginBottom: ".5rem",
                borderRadius: "50%",
              }}
              src="/Profile/Profile.png"
              alt="logo"
            />
            <div class="text-sm" style={{ lineHeight: ".6rem" }}>
              <span>
                <p>Jacob Smith</p>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ opacity: "60%", color: "white" }}>
                    Status:
                  </span>{" "}
                  Employee
                </p>
                <Button
                  style={{
                    backgroundColor: "#1A9FB2",
                    border: "2px solid white",
                    padding: "0 1.3rem",
                    color: "white",
                  }}
                  onClick={logOut}
                >
                  Sign Out
                </Button>
              </span>
              <br />
            </div>
          </span>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link
                to={nav.link}
                key={nav.name}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".8rem",
                    marginBottom: "1.3rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: ".5rem",
                      maxWidth: "30px",
                    }}
                  >
                    {nav.icon}
                  </span>
                  <span
                    style={{
                      color: "white",
                      borderBottom: "none",
                      whiteSpace: "normal",
                      fontSize: "0.7rem",
                      textDecoration: "none",
                      opacity: location.pathname === nav.link ? "100%" : "60%",
                    }}
                  >
                    {nav.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar2;
