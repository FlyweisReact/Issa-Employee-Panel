/** @format */

import React from "react";

const sidebarData = [
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

const Mobilebar = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton></Offcanvas.Header>
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
                padding: ".5rem",
              }}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Mobilebar;
