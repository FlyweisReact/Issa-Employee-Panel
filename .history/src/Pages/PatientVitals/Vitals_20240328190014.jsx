/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Vitals.css";
import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import HOC from "../../Layout/Inner/HOC";
import { showNotification } from "../../Repository/Apis";
import { SelectMaker } from "../../Helper/Makers";
import { fetchApi } from "../../Repository/Apis";

const Vitals = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [id, setId] = useState("");
  const [data, setData] = useState({});
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllpatients = () => {
    axios.get(`${process.env.React_App_Baseurl}employee/getPatient`, Auth()).then((res) => {
      setPatients(res.data?.data);
    });
  };

  useEffect(() => {
    getAllpatients();
  }, []);

  useEffect(() => {
    if (id) {
      fetchApi(
        setLoading,
        `employee/getPatientVitalsByPatientId/${id}?for=${type}`,
        setData
      );
    }
  }, [id, type]);

  const item = data?.data?.data?.[0];

  return (
    <>
      <div className="nav-wrap-personal">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            VITALS
          </p>
          <p>
            <Button
              onClick={() => navigate("/create-vital")}
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                marginRight: "1rem",
              }}
              variant="primary"
            >
              + NEW
            </Button>
          </p>
        </div>
      </div>

      <Container>
        <Form className="w-100 text-start">
          <SelectMaker
            setValue={setId}
            options={patients?.map((i) => ({
              label: i.fullName,
              value: i._id,
            }))}
            value={id}
            label={"Patient Name"}
          />
        </Form>
      </Container>

      <Container className="date_filter_text">
        <ul>
          <li
            className={`${type === "today" && "active"}`}
            onClick={() => setType("today")}
          >
            Today
          </li>
          <li
            className={`${type === "month" && "active"}`}
            onClick={() => setType("month")}
          >
            Last Week
          </li>
          <li
            className={`${type === "week" && "active"}`}
            onClick={() => setType("week")}
          >
            Next Week
          </li>
        </ul>
      </Container>

      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="vital_container mt-5">
            <div className="main">
              <img src="/Dashboard2/Vitals/thermameter.png" alt="" />
              <h6>Body Temp</h6>
              <h5> {item?.bodyTemperature}°C</h5>
            </div>
            <div className="main">
              <img src="/Dashboard2/Vitals/heart.png" alt="" />
              <h6>Pulse Rate</h6>
              <h5>{item?.pulseRate} RPM</h5>
            </div>
            <div className="main">
              <img src="/Dashboard2/Vitals/lungs.png" alt="" />
              <h6>Respiration Rate</h6>
              <h5>{item?.respirationRate} RPM</h5>
            </div>
            <div className="main">
              <img src="/Dashboard2/Vitals/hand.png" alt="" />
              <h6>Blood Pressure</h6>
              <h5>{item?.bloodPressure}mm/hg</h5>
            </div>
            <div className="main">
              <img src="/Dashboard2/Vitals/o2.png" alt="" />
              <h6>Blood Oxygen</h6>
              <h5>{item?.bloodOxygen} O2</h5>
            </div>
            <div className="main">
              <img src="/Dashboard2/Vitals/clock.png" alt="" />
              <h6>Weight</h6>
              <h5> {item?.weight} Kg</h5>
            </div>
            <div className="main">
              <img src="/hieght.png" alt="" />
              <h6>Height</h6>
              <h5>{item?.height} cm</h5>
            </div>
            <div className="main">
              <img src="/Dashboard2/Vitals/last.png" alt="" />
              <h6>Blood Glucose Level</h6>
              <h5>{item?.bloodGlucoseLevel} mg/dL</h5>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default HOC(Vitals);
