import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Auth, showMsg ,Baseurl} from "../../../../../Baseurl";
import axios from "axios";
export const Termination = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [daction, setDaction] = useState("None");
  const [formData, setFormData] = useState({
    date: "",
    terminatedEmployeeName: "",
    hireDate: "",
    terminationDate: "",
    voluntaryReason: "",
    involuntaryReason: "",
    disciplinaryAction: "",
    copyProvidedToEmployee: "",
    eligibleForRehire: "",
    explanationForNoRehire: "",
    employeeSignature: "",
    employeeDate: "",
    administratorSignature: ""
  });

  const updateField = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  const submitHandler = (e) => {
    
    e.preventDefault();

    try {
      axios
        .post(`${Baseurl}employee/createTermination`, formData, Auth())
        .then((res) => {
          console.log(res);
          showMsg("Success", res.data.message, "success");
        });
    } catch (error) {
      showMsg("Error", error?.response?.data?.message || "An error occurred", "danger");
    }
  }
  
  return (
    <Form onSubmit={submitHandler} className="main-div-personal important">
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div className="nav-div-personal">
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            EMPLOYEE TERMINATION
          </p>
        </div>
      </div>
      <div className="top-div-personal">
        <div
          id="form-appendix"
          className="form-personal offer-letter appendix1"
        >
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date :
            </Form.Label>
            <Form.Control required onChange={(e) => updateField("date", e.target.value)} type="date" placeholder="Enter  Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name of Terminated Employee:
            </Form.Label>
            <Form.Control required onChange={(e) => updateField("terminatedEmployeeName", e.target.value)} type="text" placeholder="Enter  name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Hire Date:
            </Form.Label>
            <Form.Control required onChange={(e) => updateField("hireDate", e.target.value)} type="date" placeholder="Enter  name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Termination Date:
            </Form.Label>
            <Form.Control required onChange={(e) => updateField("terminationDate", e.target.value)} type="date" placeholder="Enter  name" />
          </Form.Group>

          <p style={{ fontSize: "1rem" }}>Reason for Termination</p>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Voluntary:
            </Form.Label>
            <Form.Select required onChange={(e) => updateField("voluntaryReason", e.target.value)}  >
              <option value="">Select</option>
              <option value="Moved out of area">Moved out of area</option>
              <option value="No call no show">No call no show</option>
              <option value="Personal">Personal</option>
              <option value="Resigned without notice">Resigned without notice</option>

 <option value="Retired"> Retired                                                                            </option>
              <option value="Retirement">Retirement</option>
              <option value="In lieu of Discharge">In lieu of Discharge</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Involuntary:
            </Form.Label>
            <Form.Select required onChange={(e) => updateField("involuntaryReason", e.target.value)}  >
              <option value="">Select</option>
              <option value="Contract work ended">Contract work ended</option>
              <option value="Laid off">Laid off</option>
              <option value="Personal">Personal</option>
              <option value="Policy Violation">Policy Violation</option>
              <option value="Poor Performance">Poor Performance</option>
              <option value="Transferred">Transferred</option>
              <option value="Absenteeism or Tardiness">Absenteeism or Tardiness</option>
              <option value="6">Job Abandonment</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "10px" }}>
                Documents disciplinary action prior to termination
              </span>
              <div  onChange={(e) => updateField("disciplinaryAction", e.target.value)}  style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                  <Form.Check.Input name="nightSweats1" type={"radio"}  isValid />
                  <Form.Check.Label
                    style={{
                      marginLeft: "5px",
                      marginRight: "15px",
                      marginBottom: "0",
                    }}
                  >
                    Verbal warnings
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                  <Form.Check.Input name="nightSweats1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    Written warnings
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-night-sweats-no`}
                >
                  <Form.Check.Input name="nightSweats1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    None
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "10px" }}>
                Copy Provided to employee
              </span>
              <div  style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                  <Form.Check.Input onChange={(e) => setFormData({ ...formData, copyProvided: "Employee" })} name="r1" type={"radio"} isValid />
                  <Form.Check.Label
                    style={{
                      marginLeft: "5px",
                      marginRight: "15px",
                      marginBottom: "0",
                    }}
                  >
                    Employee
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                  <Form.Check.Input name="r1" type={"radio"} isValid onChange={(e) => setFormData({ ...formData, copyProvided: "Employee File" })} />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    Employee File
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-night-sweats-no`}
                >
                  <Form.Check.Input onChange={(e) => setFormData({ ...formData, copyProvided: "Other" })} name="r1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    Other
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "10px" }}>
                Eligible for rehire and date
              </span>
              <div onChange={(e) => updateField("eligibleForRehire", e.target.value)} style={{ display: "flex", alignItems: "center" }}>
                <Form.Check    checked={checked} value={checked ?"yes":"no"} type={"radio"} id={`check-api-night-sweats-yes`}>
                  <Form.Check.Input name="s1" type={"radio"} isValid />
                  <Form.Check.Label 
                    style={{
                      marginLeft: "5px",
                      marginRight: "15px",
                      marginBottom: "0",
                    }}
                  >
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check    checked={!checked} type={"radio"} id={`check-api-night-sweats-no`}>
                  <Form.Check.Input name="s1" type={"radio"} isValid />
                  <Form.Check.Label  style={{ marginBottom: "0" }}>
                    No
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Label>
          </Form.Group>
          <p>If no, Please Explain</p>
          <Form.Group className="mb-3">
            <Form.Control onChange={(e) => updateField("explanation", e.target.value)} as="textarea" rows={3} placeholder="Please Explain" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Employee Signature :
            </Form.Label>
            <Form.Control required onChange={(e) => updateField("employeeSignature", e.target.value)} type="text" placeholder="Enter Employee Signature" />
          </Form.Group>
          <div className="save-as-draft-btn-personal">
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
                SAVED AND SIGNED
              </button>
            </div>
          </div>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("employeeDate", e.target.value)} type="date"  />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Administrator Signature :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("administratorSignature", e.target.value)} type="text" />
          </Form.Group>
          <div className="save-as-draft-btn-personal">
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
                borderRadius: "10px",
              }}
              type="submit"
            >
              PRINT REPORT
            </button>
          </div>
          <div className="save-as-draft-btn123">
            <button  className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};
