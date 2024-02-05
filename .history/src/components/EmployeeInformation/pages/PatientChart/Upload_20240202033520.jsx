/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { showMsg } from "../../../api/ShowMsg";
import { UploadModal } from "../../../../Mod/Modal";
const Upload = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [patientId, setPatientId] = useState();
  const [open, setOpen] = useState(true);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const getAllPatents = () => {
    getData(setData, "employee/getPatient");
  };
  
  useEffect(() => {
    getAllPatents();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", file);
    formData.append("patientId", patientId);
    if (!patientId || !file) {
      return showMsg("Error", "Please select patient and file", "danger");
    }
    postData("employee/createUploadDocument", formData);
    setFile(null);
  };

  return (
    <>
      <UploadModal options={data?.data} setValue={setPatientId}  show={open} onHide={() => setOpen(false)} />
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            UPLOAD DOCUMENTS
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div
          className="top-div-personal"
          style={{
            display: "grid",
            placeItems: "center",
            height: "60vh",
          }}
        >
          <Form.Group className="mb-3 w-56">
            <Form.Label>Select Patient</Form.Label>
            <Form.Select onChange={(e) => setPatientId(e.target.value)}>
              <option value="">Select</option>
              {data?.data?.map((patient) => (
                <option key={patient._id} value={patient._id}>
                  {patient.fullName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <div
            className="upload_box"
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={handleFileSelect}
              id="fileInput"
            />
            <img
              src="/Dashboard2/Patinent Chart/upload.png"
              alt="Upload Icon"
            />
            <button>
              <span>Choose</span> your file
            </button>
          </div>

          <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
            <button
              style={{
                padding: "10px 24px",
                backgroundColor: "#1A9FB2",
                color: "white",
                marginTop: "1rem",
                borderRadius: "2px",
              }}
              onClick={submitHandler}
              type="submit"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
