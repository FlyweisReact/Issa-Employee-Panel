/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import "./Vitals.css";
import { IoIosMenu } from "react-icons/io";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Baseurl, Auth } from "../../../../Baseurl";
import { SelectMaker } from "../../../../Helper/Makers";
import { fetchApi } from "../../../../Repository/Apis";
import Loader from "../../../Loader/Loader";

const Vitals = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [id, setId] = useState("");
  const [data, setData] = useState({});
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllpatients = () => {
    axios.get(`${Baseurl}employee/getPatient`, Auth()).then((res) => {
      // console.log(res.data);
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
              onClick={() => navigate("/employee/vitals/add")}
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

      <div style={{ width: "90%", margin: "auto" }}>
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
      </div>

      <div className="date_filter_text">
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
      </div>

      {loading ? (
        <Loader />
      ) : (
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
            <h5>{item?.bloodOxygen}°C</h5>
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
            <h5>{item?.bloodGlucoseLevel} °C</h5>
          </div>
        </div>
      )}
    </>
  );
};

export default HOC2(Vitals);
