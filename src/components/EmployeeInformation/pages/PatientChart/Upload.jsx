import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
const Upload = () => {
  const [file, setFile] = useState(null);

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
          <div
            style={{
              maxWidth: "350px",
              width: "270px",
              border: "1px dotted black",
              padding: "1rem",
              textAlign: "center",
              margin: "auto",
              borderRadius: "5px",
              marginTop: "2rem",
            }}
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
            <label htmlFor="fileInput">
              <img
                style={{
                  maxWidth: "90px",
                  width: "auto",
                  height: "auto",
                  margin: "auto",
                }}
                src="/Dashboard2/Patinent Chart/upload.png" // Update image path
                alt="Upload Icon"
              />
              <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
                Drag and drop here <br />
                or <br /> <span style={{ color: "#0C5C75" }}>browse</span>
              </p>
            </label>
            {file && <p>Selected File: {file.name}</p>}
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
