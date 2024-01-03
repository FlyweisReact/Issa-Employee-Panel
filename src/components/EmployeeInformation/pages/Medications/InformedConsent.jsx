import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
const InformedConsent = () => {
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
            INFORMEDCONSENT FOR MEDIACTIONS
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Admit Date</Form.Label>
            <Form.Control type="date" placeholder="Enter text" />
          </Form.Group>

          <Table
            style={{ borderColor: "black", textAlign: "center" }}
            responsive
            bordered
          >
            <thead>
              <tr>
                <th>Medication/Instructions</th>
                <th> Medication Start Date</th>
                <th>Few Days Only</th>
                <th>D/C Date</th>
                <th>Resident/Guardian Initial</th>
                <th>Staff Initial</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ border: "1px solid black" }}>
                <td> </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td> </td>
                <td></td>
                <td></td>

                <td></td>
                <td></td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td> </td>
                <td></td>
                <td></td>

                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td> </td>
                <td></td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td> </td>
                <td></td>
                <td></td>
                <td></td>

                <td></td>
                <td></td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td> </td>
                <td></td>
                <td></td>

                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <p style={{ fontWeight: "500" }}>
            I, the resident/Guardian, have received instruction in the use of
            the above listed medication(s) including the medication anticipated
            results, and potential side effect that maybe result from not taking
            the medication.
          </p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Staff Name, Tittle</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Signature of Staff</Form.Label>
            {/* <Form.Control type="text" placeholder="Enter text" /> */}
          </Form.Group>
          <div
            style={{ maxWidth: "370px", width: "auto" }}
            className="save-as-draft-btn-personal"
          >
            <div>
              <img
                style={{ height: "80%", width: "100%", border: "1px " }}
                src="/Dashboard/save.png"
                alt=""
              />
            </div>
            <div className="save-as-draft-btn">
              <button style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}>
                SAVE AS DRAFT
              </button>
              <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                SAVED AND SAVED
              </button>
            </div>
          </div>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Initials:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Resident/Guardian/Public Fiduciary Signature:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
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
              type="submit"
            >
              PRINT REPORT
            </button>
          </div>
          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformedConsent;
