import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";

const Intake = () => {
  const navigate = useNavigate();
  const options = [
    {
      label: "9:30am",
      value: "9:30",
    },
    {
      label: "10:00am",
      value: "10:00",
    },
    {
      label: "10:30am",
      value: "10:30",
    },
    {
      label: "11:00am",
      value: "11:00",
    },
    {
      label: "11:30am",
      value: "11:30",
    },
    {
      label: "12:00am",
      value: "12:00",
    },
  ];

  const imageStyles = {
    maxWidth: "140px",
    maxHeight: "150px",
    width: "auto",
    height: "auto",
    margin: "5px",
    cursor: "pointer",
  };
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>Intakes</p>
          <p></p>
        </div>
      </div>
      <div>
        <div>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginTop: "3rem",
              }}
            >
              <span style={{ color: "#4DAF4E" }}>2 OUT OF 6 INTAKES </span> HAVE
              BEEN UPLOADED!
            </p>
            <div
              style={{
                borderRadius: "10px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
              }}
            >
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  onClick={() => navigate("/patient-list/initial-assessment")}
                  style={imageStyles}
                  src={`/Patient_Page/1.png`}
                  alt={1}
                />
              </div>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  onClick={() => navigate("/patient-list/nursing-assessment")}
                  style={imageStyles}
                  src={`/Patient_Page/2.png`}
                  alt={1}
                />
              </div>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  onClick={() => navigate("/patient-list/treatment-plan")}
                  style={imageStyles}
                  src={`/Patient_Page/3.png`}
                  alt={1}
                />
              </div>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                }}
              >
                <img onClick={() => navigate("/patient-list/face-sheet")} style={imageStyles} src={`/Patient_Page/4.png`} alt={1} />
              </div>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                }}
              >
                <img style={imageStyles} src={`/Patient_Page/5.png`} alt={1} />
              </div>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                }}
              >
                <img style={imageStyles} src={`/Patient_Page/6.png`} alt={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intake;
