/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { InputMaker, TextareaMaker } from "../../../../../Helper/Makers";
import { SignatureModal } from "../../../../../Mod/Modal";
import { postApi } from "../../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";

const CreateIncidentReport2 = () => {
  const navigate = useNavigate();
  const [savedSignedPartA, setSavedSignaturePartA] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [aPartId, setAPartId] = useState("65ba347588aafb58b05e31c5");
  const [investigationDetails, setInvestigationDetails] = useState("");
  const [
    investigationRecommendationsAndActions,
    setInvestigationRecommendationsAndActions,
  ] = useState("");
  const [investigationFollowUp, setInvestigationFollowUp] = useState("");
  const [investigationCompletedBy, setInvestigationCompletedBy] = useState("");
  const [investigationCompletionDate, setInvestigationCompletionDate] =
    useState("");
  const [savedSignedPartB, setSavedSignedPartB] = useState("");

  const payload = {
    aPartId.
    inv
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(setLoading, `employee/createIncidentReportPartA`, payload);
    navigate("/employee/patient-chart/incident");
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSavedSignedPartB}
        value={savedSignedPartB}
        text={"Digitally Sign by employee name"}
      />
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            INCIDENT REPORT
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form onSubmit={submitHandler} className="w-100 text-start">
            <p style={{ fontWeight: "bold" }}>
              Part II – Investigation of Incident (To be completed by
              Administrator)
            </p>
            <TextareaMaker
              label={"Investigation of Incident"}
              placeholder="Enter Text"
              setValue={setInvestigationDetails}
              value={investigationDetails}
            />
            <TextareaMaker
              label={"Recommendations and Actions"}
              placeholder="Enter Text"
              setValue={setInvestigationRecommendationsAndActions}
              value={investigationRecommendationsAndActions}
            />
            <TextareaMaker
              label={"Follow up"}
              placeholder="Enter Text"
              setValue={setInvestigationFollowUp}
              value={investigationFollowUp}
            />

            <InputMaker
              label={"Completed By"}
              setState={setInvestigationCompletedBy}
              placeholder=""
              type={"text"}
              value={investigationCompletedBy}
            />
            <InputMaker
              label={"Date"}
              setState={setInvestigationCompletionDate}
              placeholder=""
              type={"date"}
              value={investigationCompletionDate}
            />

            <div className="cluod_save">
              <div className="main">
                <button className="outlined_btn">SAVE AS DRAFT</button>
                <button
                  type="button"
                  className="filled"
                  onClick={() => setOpen(true)}
                >
                  SAVED AND SIGNED
                </button>
              </div>
            </div>

            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                }}
                type="button"
              >
                PRINT REPORT
              </button>
            </div>
            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateIncidentReport2;
