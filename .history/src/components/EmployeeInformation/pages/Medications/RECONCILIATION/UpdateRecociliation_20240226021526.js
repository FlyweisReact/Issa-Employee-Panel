/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import { SignatureModal } from "../../../../../Mod/Modal";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { editApi } from "../../../../../Repository/Apis";

const UpdateRecociliation = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [allergiesAndReactions, setAllergiesAndReactions] = useState("");
  const [name, setName] = useState("");
  const [dose, setDose] = useState("");
  const [route, setRoute] = useState("");
  const [frequency, setFrequency] = useState("");
  const [startDate, setStartDate] = useState("");
  const [stopChangeDate, setStopChangeDate] = useState("");
  const [reasonForStopChange, setReasonForStopChange] = useState("");
  const [providerName, setProviderName] = useState("");
  const [providerSignature, setProviderSignature] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [arr, setArr] = useState([]);
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  useEffect(() => {
    getData(setDetails, `employee/getMedicationReconciliationById/${id}`);
  }, [id]);

  const medications = {
    name,
    dose,
    route,
    frequency,
    startDate,
    stopChangeDate,
    reasonForStopChange,
  };

  const payload = {
    patientId,
    residentName,
    allergiesAndReactions,
    medications: arr?.map((i) => ({
      name: i.name,
      dose: i.dose,
      route: i.route,
      frequency: i.frequency,
      startDate: i.startDate,
      stopChangeDate: i.stopChangeDate,
      reasonForStopChange: i.reasonForStopChange,
    })),
    providerName,
    providerSignature,
    date,
  };

  const addData = () => {
    setArr((prev) => [...prev, medications]);
  };

  const removeOne = (index) => {
    setArr((prev) => prev.filter((_, i) => i !== index));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    editApi(
      setLoading,
      `employee/editMedicationReconciliationById/${id}`,
      payload
    );
  };

  useEffect(() => {
    if (patients) {
      const filtered = patients?.data?.filter((i) => i._id === patientId);
      setResidentName(filtered?.[0]?.fullName);
    }
  }, [patientId]);

  useEffect(() => {
    if (details) {
      const item = details?.data;
      setPatientId(item?.patientId);
      setAllergiesAndReactions(item?.allergiesAndReactions);
      setProviderName(item?.providerName);
      setProviderSignature(item?.providerSignature);
      setArr(item?.medications);
    }
  }, [details]);

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setProviderSignature}
        value={providerSignature}
        text={"Digitally Sign by"}
      />
       <NavWrapper isArrow={true} title={"Medication Reconciliation"} />
    
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            MEDICATION RECONCILIATION
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <Container className="full-width-container">
          <form onSubmit={submitHandler} className="employee1">
            <SelectMaker
              setValue={setPatientId}
              options={patients?.data?.map((i) => ({
                label: i.fullName,
                value: i._id,
              }))}
              label="Resident’s Name:"
              value={patientId}
            />
            <InputMaker
              label="Allergies and reaction:"
              setState={setAllergiesAndReactions}
              placeholder=""
              type="text"
              value={allergiesAndReactions}
            />
            <InputMaker
              label="Name of Medication:"
              setState={setName}
              placeholder=""
              type="text"
              value={name}
            />
            <InputMaker
              label="Dose:"
              setState={setDose}
              placeholder=""
              type="text"
              value={dose}
            />
            <InputMaker
              label="Route:"
              setState={setRoute}
              placeholder=""
              type="text"
              value={route}
            />
            <InputMaker
              label="Frequency:"
              setState={setFrequency}
              placeholder=""
              type="text"
              value={frequency}
            />
            <InputMaker
              label="Start Date:"
              setState={setStartDate}
              placeholder=""
              type="date"
              value={DateFormatter(startDate)}
            />
            <InputMaker
              label="Stop/Change Date:"
              setState={setStopChangeDate}
              placeholder=""
              type="date"
              value={DateFormatter(stopChangeDate)}
            />
            <InputMaker
              label="Reason for Stop/Change:"
              setState={setReasonForStopChange}
              placeholder=""
              type="text"
              value={reasonForStopChange}
            />
            <Form.Group className="mb-3 ">
              <Button
                style={{ backgroundColor: "#0C5C75" }}
                variant="primary"
                type="button"
                onClick={() => addData()}
              >
                + Add
              </Button>
            </Form.Group>

            {arr?.map((i, index) => (
              <div key={index} className="mb-3">
                <DefaultInput
                  value={i.name}
                  isBots={true}
                  label={"Name of Medication:"}
                />
                <DefaultInput value={i.dose} isBots={true} label={"Dose:"} />
                <DefaultInput value={i.route} isBots={true} label={"Route:"} />
                <DefaultInput
                  value={i.frequency}
                  isBots={true}
                  label={"Frequency:"}
                />
                <DefaultInput
                  value={DateFormatter(i.startDate)}
                  isBots={true}
                  label={"Start Date:"}
                />
                <DefaultInput
                  value={i.reasonForStopChange}
                  isBots={true}
                  label={"Stop/Change Date:"}
                />
                <DefaultInput
                  value={DateFormatter(i.stopChangeDate)}
                  isBots={true}
                  label="Reason for Stop/Change:"
                />
                <button
                  className="remove_this"
                  type="button"
                  onClick={() => removeOne(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <InputMaker
              label="Provider Name:"
              setState={setProviderName}
              placeholder=""
              type="text"
              value={providerName}
            />
            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button
                  type="button"
                  className="signed"
                  onClick={() => setOpen(true)}
                >
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {providerSignature && (
                  <p>Digitally Sign by {providerSignature} </p>
                )}
              </div>
            </div>

            <InputMaker
              label="Date:"
              setState={setDate}
              placeholder=""
              type="date"
              value={DateFormatter(date)}
            />

            <div
              className="print_btn"
              style={{ maxWidth: "200px", textAlign: "center" }}
            >
              PRINT REPORT
            </div>

            <div className="save-as-draft-btn123 mb-3">
              <button className="btn1233" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};

export default UpdateRecociliation;
