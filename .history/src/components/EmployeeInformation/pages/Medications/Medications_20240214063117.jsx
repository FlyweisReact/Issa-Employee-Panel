/** @format */

import { Link } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import 

const Medications = () => {
  const Items = [
    {
      src: "/Dashboard2/Medications/Group 17628.png",
      link: "/employee/medications/mars",
    },
    {
      src: "/Dashboard2/Medications/Group 17627.png",
      link: "/employee/medications/reconciliations",
    },
    {
      src: "/Dashboard2/Medications/Group 17626.png",
      link: "/employee/medications/medication-count",
    },
    {
      src: "/Dashboard2/Medications/Group 17625.png",
      link: "/employee/medications/informed-consent",
    },
    {
      src: "/Dashboard2/Medications/Group 17624.png",
      link: "/employee/medications/prn-form",
    },
  ];

  return (
    <>
      <div className="nav-wrap-personal ">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>MEDICATIONS</p>
          <p></p>
        </div>
      </div>

      <Container>
        <div className="patient_chart_container">
          {Items?.map((i, index) => (
            <Link to={i?.link} key={index}>
              <img src={i.src} alt="" />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default HOC2(Medications);
