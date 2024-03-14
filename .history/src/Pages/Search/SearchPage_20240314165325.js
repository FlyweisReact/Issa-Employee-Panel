/** @format */

import React, { useEffect, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getData } from "../../components/api/api";
import HOC from "../../Layout/Outer/HOC";
import { DateInMMDDYY } from "../../Repository/Apis";

const SearchPage = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("Info");
  const { id } = useParams();
  const [info, setInfo] = useState({});

  function DocumentUploader(props) {
    const [fileType, setFileType] = useState("");
    const [file, setFile] = useState("");
    const [arr, setArr] = useState([]);
    const [fileUrl, setFileUrl] = useState(null);

    const payload = { fileType, file, fileUrl };

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const fileObjectUrl = URL.createObjectURL(selectedFile);
      setFileUrl(fileObjectUrl);
    };

    const addFiles = async (e) => {
      e.preventDefault();
      await setArr((prev) => [...prev, payload]);
      setType("");
      setFile("");
    };

    const removeFile = (index) => {
      const filterThis = arr?.filter((_, i) => index !== i);
      setArr(filterThis);
    };

    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="file-upload-modal">
          <Container className="full-width-container">
            <form onSubmit={addFiles}>
              <div className="close-header">
                <h5>File Upload </h5>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => props.onHide()}
                ></i>
              </div>
              <div className="wrapper">
                <div className="flexbox">
                  <div className="items">
                    <p className="head">Actions</p>
                    <button type="submit">Add Additional files</button>
                  </div>
                  <div className="items">
                    <p className="head">File Type</p>
                    <select onChange={(e) => setFileType(e.target.value)}>
                      <option value=""> Select Prefrence </option>
                      <option vale="First Type"> First Type </option>
                      <option vale="Second Type">Second Type </option>
                    </select>
                  </div>
                  <div className="items">
                    <p className="head">File Name</p>
                    <input type="file" onChange={handleFileChange} />
                  </div>
                </div>

                <table className="colored_table mt-3">
                  <thead>
                    <tr>
                      <th className="text-start">Type</th>
                      <th className="text-start">File</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr?.map((i, index) => (
                      <tr key={index}>
                        <td className="text-start"> {i.fileType} </td>
                        <td className="text-start">
                          <a href={fileUrl} target="_blank" rel="noreferrer">
                            View File
                          </a>
                        </td>
                        <td>
                          <i
                            className="fa-solid fa-trash-can cursor-pointer"
                            onClick={() => removeFile(index)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="btn-container">
                  <button className="upload_files" type="button">
                    Upload Files
                  </button>
                </div>
              </div>
            </form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

  const fetchPatientInfo = () => {
    getData(setInfo, `employee/getPatientById/${id}`);
  };

  useEffect(() => {
    fetchPatientInfo();
  }, [id]);

  return (
    <>
      <DocumentUploader show={show} onHide={() => setShow(false)} />

      <Container className="full-width-container">
        <div className="search-page">
          <h5 className="patient-name">
            <span>Patient:</span> Anna Lanae BECK{" "}
          </h5>

          <div className="tabs-list">
            <ul>
              <li onClick={() => setType("Info")}>Info</li>
              <li onClick={() => setType("Documents")}>Documents</li>
              <li onClick={() => setType("Vitals")}>Vitals</li>
              <li onClick={() => setType("Medications")}>Medications</li>
              <li onClick={() => setType("Intake")}>Intake</li>
              <li onClick={() => setType("Schedule")}>Schedule</li>
            </ul>
          </div>
          {console.log(info?.data)}

          {type === "Info" && (
            <div>
              <div className="info-tab">
                <div className="heading">
                  <p>Patient Information:</p>
                </div>
                <div className="flex-container">
                  <div className="items">
                    <p>
                      <span className="light-one">Legal Name: </span>
                      <span className="bold-one"> {info?.data?.fullName} </span>
                    </p>
                    <p>
                      <span className="light-one">Date of Birth: </span>
                      <span className="bold-one">
                        {" "}
                        {DateInMMDDYY(info?.data?.dateOfBirth)}{" "}
                      </span>
                    </p>
                    <p>
                      <span className="light-one">Address: </span>
                      <span className="bold-one">{info?.data?.address}</span>
                    </p>

                    <p>
                      <span className="light-one">Mobile Phone: </span>
                      <span className="bold-one">
                        {info?.data?.mobileNumber}
                      </span>
                    </p>

                    <p>
                      <span className="light-one">Email: </span>
                      <span className="bold-one">{info?.data?.email}</span>
                    </p>
                  </div>


                </div>
              </div>
            </div>
          )}

          {type === "Documents" && (
            <div className="overflow-table">
              <div className="upload-file-btn mb-3">
                <button onClick={() => setShow(true)}>
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                  Upload Patient File
                </button>
              </div>

              <table className="colored_table">
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Author/Access</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://google.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Intake
                      </a>
                    </td>
                    <td>H2027</td>
                    <th>06/12/2024</th>
                    <th>Jazm. FINLEY</th>
                    <th>Singed by Supervisor</th>
                    <td>
                      <div className="icon-joiner">
                        <i className="fa-solid fa-eye" />
                        <i className="fa-solid fa-pen" />
                        <i className="fa-regular fa-trash-can"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {type === "Vitals" && (
            <div className="overflow-table">
              <table className="colored_table">
                <thead>
                  <tr>
                    <th>Body Temp</th>
                    <th>Pulse Rate</th>
                    <th>Respiration Rate</th>
                    <th>Blood Pressure</th>
                    <th>Blood Oxygen</th>
                    <th>Weight</th>
                    <th>Height</th>
                    <th>Blood Glucose Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>98.4°C</td>
                    <td>120 RPM</td>
                    <td>55 RPM</td>
                    <td>56mm/hg</td>
                    <td>54 O2</td>
                    <td>78 Kg</td>
                    <td>5'11'' cm</td>
                    <td>43 mg/dL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: SearchPage });
