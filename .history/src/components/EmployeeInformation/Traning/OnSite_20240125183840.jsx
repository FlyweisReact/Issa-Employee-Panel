/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../api/api.js";

const OnSite = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(setLoading, `employee/getAllOnSiteFacility`);
  };

  const handleDelete = (id) => {
    deleteData("employee/deleteOnSiteFacility", id);
  };

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/training")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            paddingRight: "1rem",
          }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            ON SITE AND FACILITY ORIENTATION VERIFICATION
          </p>
          <p>
            <Button onClick={() => navigate("/employee/training/on-site2")}>
              + NEW
            </Button>
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form
            style={{ width: "100%" }}
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <p>
              The following orientation trainings are conducted during the 1st
              week of hire and before providing services to residents.
            </p>
            <p>
              1. Chain of Command <br /> 2.Resident Rights
              <br /> 3.Immediately report suspected or alleged abuse, neglect or
              exploitation or a violation of a patient’s rights.
              <br /> 4.Program evacuation path /Safety Disaster Plan
              <br /> 5.Ethics/ professionalism
              <br /> 6.Patient activities / treatment schedule
              <br /> 7.Current Patient issues
              <br /> 8.Personnel – payroll, benefits, disciplinary process
              <br /> 9.Supervision
              <br /> 10.Training Plan <br />
              11. Policy and Procedure Manual <br /> 12. Use of office
              equipment. <br />
              13. Documentation in the medical record, and how information are
              protected <br />
              14. Confidentiality <br /> 15. Incident and Accident reporting{" "}
              <br /> 16. Job description <br /> 17. Program Rules <br /> 18.
              Procedures for responding to a fire, disaster, hazard, a medical
              emergency and a resident experiencing a crisis situation.
              <br /> 19. Infectious diseases and blood borne pathogen.
            </p>
            <p style={{ fontWeight: "500" }}>
              Document more than one training date and duration of training if
              training occurs more than in one time period.
            </p>

            <button className="print_btn" type="button">
              PRINT REPORT
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default OnSite;