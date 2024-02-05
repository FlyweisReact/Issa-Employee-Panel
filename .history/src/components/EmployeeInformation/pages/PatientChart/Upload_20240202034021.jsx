/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../api/api";
import { UploadModal } from "../../../../Mod/Modal";
import { postApi } from "../../../../Repository/Apis";

const Upload = () => {
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
    postApi(setLoading, "employee/createUploadDocument", formData);
  };

  const choose_file = () => {
    const target = document.getElementById("fileInput");
    target.click();
  };

  return (
    <>
      <UploadModal
        options={data?.data}
        setValue={setPatientId}
        show={open}
        onHide={() => setOpen(false)}
        handler={choose_file}
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
          <div className="upload_box">
            <input type="file" style={{ display: "none" }} id="fileInput" />
            <img
              src="/Dashboard2/Patinent Chart/upload.png"
              alt="Upload Icon"
            />
            <button onClick={() => setOpen(true)}>
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
