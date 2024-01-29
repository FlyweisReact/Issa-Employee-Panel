/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table  , Form} from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData } from "../../../api/api.js";
import { Modal } from "react-bootstrap";

import { getData } from "../../../api/api";
import { editApi } from "../../../../Repository/Apis.js";\
import Clip

const Discharge = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  const deleteHandler = (id) => {
    deleteData(
      "employee/deleteDischargeSummary",
      id,
      getData(setData, "employee/getAllDischargeSummary")
    );
  };

  useEffect(() => {
    getData(setData, "employee/getAllDischargeSummary");
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [loading, setLoading] = useState(false);
    const initialFormData = {
      patientId: "",
      clientName: "",
      dateOfBirth: "",
      dateOfAdmission: "",
      dateOfDischarge: "",
      presentingIssue: "",
      treatmentProvided: "",
      progress: "",
      medicationUponDischarge: "",
      fundsPropertiesUponDischarge: "",
      reasonForDischarge: "",
      dischargePlanReferralAftercarePlan: "",
      patientGuardianSignature: "",
      patientGuardianSignatureDate: "",
      staffNameAndTitle: "",
      staffSignature: "",
      staffSignatureDate: "",
      bhpNameAndCredentials: "",
      bhpSignature: "",
      bhpSignatureDate: "",
    };
    const [formData, setFormData] = useState(initialFormData);
    const [patients, setPatients] = useState([]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    useEffect(() => {
      if (props?.show) {
        getData(setPatients, "employee/getPatient");
      }
    }, [props]);
    const handleInputChange1 = (e) => {
      const selectedPatientId = e.target.value;
      const selectedPatientObject = patients?.data?.find(
        (patient) => patient._id === selectedPatientId
      );

      setFormData({
        ...formData,
        patientId: selectedPatientId,
        clientName: selectedPatientObject?.fullName || "",
      });
    };

    const submitHandler = (e) => {
      e.preventDefault();
      editApi(setLoading, "employee/createDischargeSummary", formData);
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={submitHandler}
            className="form-personal offer-letter appendix1 w-100"
          >
            <Form.Group className="mb-3">
              <Form.Label>Resident Name</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="patientId"
                required
                onChange={handleInputChange1}
              >
                <option value="">Select</option>
                {patients?.data?.map((patient) => (
                  <option key={patient._id} value={patient._id}>
                    {patient.fullName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                name="dateOfBirth"
                onChange={handleInputChange}
                required
                type="date"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date of Admission</Form.Label>
              <Form.Control
                name="dateOfAdmission"
                onChange={handleInputChange}
                required
                type="date"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date of Discharge</Form.Label>
              <Form.Control
                name="dateOfDischarge"
                onChange={handleInputChange}
                required
                type="date"
              />
            </Form.Group>

            <p>Presenting issue:</p>
            <Form.Group className="mb-3">
              <Form.Label>Treatment Provided:</Form.Label>
              <Form.Control
                name="treatmentProvided"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Progress:</Form.Label>
              <Form.Control
                name="progress"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Medication Upon Discharge:</Form.Label>
              <Form.Control
                name="medicationUponDischarge"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Presenting Issue:</Form.Label>
              <Form.Control
                name="presentingIssue"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Funds/Properties Upon Discharge:</Form.Label>
              <Form.Control
                name="fundsPropertiesUponDischarge"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reason for Discharge:</Form.Label>
              <Form.Control
                name="reasonForDischarge"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <p>Discharge Plan, Referral, and Aftercare Plan:</p>
            <Form.Group className="mb-3">
              {/* <Form.Label>Patient/Guardian Signature</Form.Label> */}
              <Form.Control
                name="dischargePlanReferralAftercarePlan"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Patient/Guardian Signature:</Form.Label>
              <Form.Control
                name="patientGuardianSignature"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                name="patientGuardianSignatureDate"
                onChange={handleInputChange}
                required
                type="date"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Staff’s Name and Title:</Form.Label>
              <Form.Control
                name="staffNameAndTitle"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group classNamae="mb-3">
              <Form.Label>Signature</Form.Label>
              <Form.Control
                name="staffSignature"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                required
                name="staffSignatureDate"
                type="date"
                onChange={handleInputChange}
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>BHT’s Name and Credentials:</Form.Label>
              <Form.Control
                name="bhpNameAndCredentials"
                type="text"
                required
                placeholder="Enter  text"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature:{" "}
              </Form.Label>
              <Form.Control
                required
                name="bhpSignature"
                type="text"
                onChange={handleInputChange}
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                name="bhpSignatureDate"
                onChange={handleInputChange}
                required
                type="date"
                placeholder="Enter  text"
              />
            </Form.Group>
            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "10px",
                }}
                type="button"
              >
                PRINT REPORT
              </button>
            </div>
            <div className="save-as-draft-btn123">
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "10px",
                  marginBottom: "1rem",
                }}
                type="submit"
              >
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal show={open} onHide={() => setOpen(false)} />
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
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
          <p style={{ fontWeight: "bold", flex: "1" }}>DISCHARGE SUMMARY</p>
          <p>
            <Button
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                backgroundColor: "#1A9FB2",
                padding: ".5rem 1.5rem",
                border: "none",
              }}
              onClick={() => navigate("/employee/patient-chart/discharge2")}
            >
              + NEW
            </Button>
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Table responsive>
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: "#D1ECF0",
                    borderRadius: "5px 0 0 0",
                  }}
                >
                  <input type="checkbox" />
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Resident’s Name </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Date of Admission
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Date of Discharge
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Reason for Discharge
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Treatment Provided
                </th>

                <th style={{ backgroundColor: "#D1ECF0" }}></th>
                <th
                  style={{
                    backgroundColor: "#D1ECF0",
                    borderRadius: "0 5px 0 0",
                  }}
                ></th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.length > 0 &&
                data?.data?.map((item) => {
                  return (
                    <tr key={item?._id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{item?.clientName}</td>
                      <td>{item?.dateOfAdmission?.split("T")[0]}</td>{" "}
                      <td>{item?.dateOfDischarge?.split("T")[0]}</td>
                      <td>{item?.reasonForDischarge}</td>
                      <td>{item?.treatmentProvided}</td>
                      <td className="icon-joiner">
                        <span
                          onClick={() => {
                            setId(item?._id);
                            setOpen(true);
                          }}
                          className="cursor-pointer"
                        >
                          {" "}
                          <FaRegEdit />
                        </span>
                        <span
                          onClick={() => {
                            deleteHandler(item?._id);
                            console.log("id");
                          }}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <RiDeleteBin5Fill style={{ color: "red" }} />
                          <span style={{ color: "red", fontSize: "1.1.1rem" }}>
                            DELETE
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <span></span> */}
            <span>
              <Button
                type="submit"
                style={{
                  fontSize: ".9rem",
                  fontWeight: "bold",
                  backgroundColor: "#1A9FB2",
                  padding: ".5rem 1.5rem",
                  border: "none",
                }}
              >
                SAVE
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discharge;
