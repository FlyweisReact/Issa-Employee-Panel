/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { HomeIcon } from '../../assets/index'

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <img src="/Dashboard/home.png" alt="" />,
      link: "/dashboard",
      name: "Home",
      newIcon: <img src="/Dashboard/New folder/home.png" alt="" />,
    },
    {
      icon: <img src="/Dashboard2/1.png" alt="" />,
      link: "/basic-information",
      name: "Employment Application ",
      newIcon: <img src="/Dashboard/New folder/home.png" alt="" />,
    },
    {
      icon: <img src="/Dashboard2/2.png" alt="" />,
      link: "/group-notes",
      name: "Group Notes",
      newIcon: <img src="/Dashboard2/training.png" alt="" />,
    },
    {
      icon: <img src="/Dashboard2/training.png" alt="" />,
      link: "/employee/training",
      name: "Training",
      newIcon: <img src="/Dashboard/New folder/group.png" alt="" />,
    },
    {
      icon: <img src="/Dashboard2/time-off.png" alt="" />,
      link: "/get-time-of-request",
      name: "Time Off Request",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="" />,
    },
    {
      icon: <img src="/Dashboard2/1.png" alt="" />,
      link: "/scheduleGroup",
      name: "Time Sheet/Employee Schedule",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="" />,
    },
    {
      icon: <img src="/Dashboard2/performance.png" alt="" />,
      link: "/employee-performance",
      name: "Employee Performance",
      newIcon: <img src="/public/Dashboard2/performance.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/user.png" alt="fdrn" />,
      link: "/employee-tracking",
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
      link: "/vitals",
      name: "Patient Vitals",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/user.png" alt="fdn" />,
      link: "/patient-tracking",
      name: "Patient Tracking",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/medication.png" alt="fdn" />,
      link: "/medications",
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
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>

        <figure className="flex  flex-col items-center">
          <span
            style={{
              textAlign: "center",
              lineHeight: ".1rem",
            }}
            className="font-bold text-white text-2xl"
          >
            <img
              style={{ maxWidth: "155px", maxHeight: "55px" }}
              src="/logo.png"
              alt=""
            />
            <div class="text-sm mt-3" style={{ lineHeight: ".6rem" }}>
              <span>
                <p style={{ fontWeight: "500" }}>
                  <span style={{ opacity: "60%", color: "white" }}>
                    Status:
                  </span>
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
                    <img src={nav.icon} alt='' />
                  </span>
                  <span
                    style={{
                      color: "white",
                      borderBottom: "none",
                      whiteSpace: "normal",
                      fontSize: "0.7rem",
                      textDecoration: "none",
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

export default Sidebar;
