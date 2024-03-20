/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Inner/HOC";
import { BorderlessInput, DateFormatter } from "../../../Helper/Makers";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { getData } from "../../../components/api/api";

const UpdateMilegaLog = () => {
  const [date, setDate] = useState("");
  const [residentInitials, setResidentInitials] = useState("");
  const [beginningMileage, setBeginningMileaga] = useState("");
  const [endingMileage, setEndingMilega] = useState("");
  const [totalMileage, setTotalMilega] = useState("");
  const [driverSignature, setDriverSignature] = useState("");
  const [anyIssues, setAnyIssue] = useState("");
  const [signedDate, setSignedDate] = useState("");
  const [signedTime, setSignedTime] = useState("");
  const [destination, setDestination] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const payload = {
    date,
    residentInitials,
    beginningMileage,
    endingMileage,
    totalMileage,
    driverSignature,
    anyIssues,
    destination,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    editApi(setLoading, `employee/updateMileageLog/${id}`, payload);
  };

  const fetchHandler = () => {
    getData(setDetail, `employee/getMileageLogById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  console.log(detail?.data);

  useEffect(() => {
    if(detail){
        const item = detail?.data
        setDate(item?.date)
        setResidentInitials(item?.residentInitials)
        setBeginningMileaga(item?.date)
    }
  },[detail])

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setDriverSignature}
        value={driverSignature}
        setDate={setSignedDate}
        setTime={setSignedTime}
      />
      <NavWrapper title={"Milega Log"} isArrow={true} />

      <Container className="full-width-container">
        <form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container">
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setDate}
                value={DateFormatter(date)}
                type="date"
              />
            </div>
            <div className="grid-item">
              <label>Resident Initials</label>
              <BorderlessInput
                setState={setResidentInitials}
                value={residentInitials}
                type="text"
              />
            </div>

            <div className="grid-item">
              <label>Beginning Mileage</label>
              <BorderlessInput
                setState={setBeginningMileaga}
                value={beginningMileage}
                type="text"
              />
            </div>
            <div className="grid-item">
              <label>Ending Mileage</label>
              <BorderlessInput
                setState={setEndingMilega}
                value={endingMileage}
                type="text"
              />
            </div>

            <div className="grid-item">
              <label>Total Mileage</label>
              <BorderlessInput
                setState={setTotalMilega}
                value={totalMileage}
                type="text"
              />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item full-wid-input">
              <label>Destination</label>
              <BorderlessInput
                setState={setDestination}
                value={destination}
                type="text"
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Any Issues</label>
              <BorderlessInput
                setState={setAnyIssue}
                value={anyIssues}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Drivers Signature</label>
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
                  {driverSignature && (
                    <p>
                      Digitally Sign by {driverSignature}
                      {signedDate && DateInMMDDYY(signedDate)}
                      {signedTime}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button className="employee_create_btn">
            {" "}
            {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}{" "}
          </button>
        </form>
      </Container>
    </>
  );
};

export default HOC(UpdateMilegaLog);
