import {  useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";


const Medications = () => {
  const navigate = useNavigate();

  const Items =[
    {
      src: "/Dashboard2/Medications/Group 17628.png",
      link: "/employee/medications/mars",
    },
    {
      src: "/Dashboard2/Medications/Group 17627.png",
      link: "/employee/patient-chart/discharge",
    },
    {
      src: "/Dashboard2/Patinent Chart/Group 17586.png",
      link: "/employee/patient-chart/activities",
    },
    {
      src: "/Dashboard2/Patinent Chart/Group 17688.png",
      link: "/employee/patient-chart/financial",
    },
    {
      src: "/Dashboard2/Patinent Chart/Group 17687.png",
      link: "/employee/patient-chart/staffing",
    },
    {
      src: "/Dashboard2/Patinent Chart/Group 17933.png",
      link: "/employee/patient-chart/authorization",
    },
    {
      src: "/Dashboard2/Patinent Chart/Group 17934.png",
      link: "/employee/patient-chart/incident",
    },
    {
      src: "/Dashboard2/Patinent Chart/Group 17932.png",
      link: "/employee/patient-chart/contact-chart",
    },
    {
      src: "/Dashboard2/Patinent Chart/Group 17935.png",
      link: "/employee/patient-chart/upload",
    },
  ];

  return (
    <>
      <div className="nav-wrap-personal ">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            
            MEDICATIONS
          </p>
          <p></p>
        </div>
      </div>
      <div
        className="main-div-employment "
        style={{ width: "90%", margin: "auto" }}
      >
        <div>
          <img
            src=""
            onClick={() => navigate("")}
            alt="Employment"
          />
        </div>
        <div>
          <img
            src=""
            onClick={() => navigate("/employee/medications/reconciliations")}
            alt="Employment"
          />
        </div>
        <div>
          <img
            src="/Dashboard2/Medications/Group 17626.png"
            onClick={() => navigate("/employee/medications/medication-count")}
            alt="Employment"
          />
        </div>
        <div>
          <img
            src="/Dashboard2/Medications/Group 17625.png"
            onClick={() => navigate("/employee/medications/informed-consent")}
            alt="Employment"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/employee/medications/prn-form")}
            src="/Dashboard2/Medications/Group 17624.png"
            alt="Employment"
          />
        </div>
      </div>
    </>
  );
};

export default HOC2(Medications);
