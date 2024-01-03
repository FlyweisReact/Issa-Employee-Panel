import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
const PRNform = () => {
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
            PRN MEDICATION LOG
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Resident’s Name</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Medication and strength</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Instructions</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Prescriber Name</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Site</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>

          <Table
            style={{ borderColor: "black", textAlign: "center" }}
            responsive
            bordered
          >
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>#Tabs given</th>
                <th>Reason</th>
                <th>Resident initials</th>
                <th>Staff initials</th>
                <th>Time re-evaluated</th>
                <th>Response Code</th>
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
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <p>
            Response Code: A= Relief| B = No Relief | C = Sleeping | D = Out of
            Facility | E = Other (please specify)
          </p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Staff Name and Signature</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
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

export default PRNform;
