/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Auth, showMsg } from "../../../../../Baseurl";
import axios from "axios";

const MilageLog2 = () => {
  const navigate = useNavigate();
  const [ loading , setLoading ] = useState(false)
  const [formData, setFormData] = useState({
    date: "",
    residentInitials: "",
    beginningMileage: 0,
    endingMileage: 0,
    totalMileage: 0,
    driverSignature: "",
    anyIssues: "",
    destination: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          `${process.env.React_App_Baseurl}employee/createMileageLog`,
          formData,
          Auth()
        )
        .then((res) => {
          showMsg("Success", res.data.message, "success");
          navigate("/employee/therapy-notes/milage-log");
        })
        .catch((err) => {
          console.error(err);
          showMsg("Error", err.response.data.message, "error");
        });
    } catch (error) {
      console.error(error);
      showMsg("Error", error.message, "error");
    }
  };
  return (
    <>
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
          <p style={{ fontWeight: "bold", flex: "1" }}> MILEAGE LOG</p>
          <p>
            <Button
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                backgroundColor: "#1A9FB2",
                padding: ".5rem 1.5rem",
                border: "none",
              }}
              onClick={() => navigate("/employee/therapy-notes/milage-log")}
            >
              LOGS
            </Button>
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form className="form-personal" onSubmit={submitHandler} >
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date 
              </Form.Label>
              <Form.Control
                onChange={(e) => handleInputChange("date", e.target.value)}
                required
                type="date"
                placeholder="Enter Date"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Resident Initials 
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleInputChange("residentInitials", e.target.value)
                }
                type="text" required
                placeholder="Enter Resident Initials"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Beginning Mileage 
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleInputChange("beginningMileage", e.target.value)
                } required
                type="number"
                placeholder="Enter Beginning Mileage"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Ending Mileage 
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleInputChange("endingMileage", e.target.value)
                }
                required
                type="number"
                placeholder="Enter  Ending Mileage"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Total Mileage 
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleInputChange("totalMileage", e.target.value)
                }
                type="number"
                required
                placeholder="Enter Text..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Destination 
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleInputChange("destination", e.target.value)
                }
                type="text"
                required
                placeholder="Enter Text..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Driver Signature 
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleInputChange("driverSignature", e.target.value)
                }
                type="text"
                required
                placeholder=" Enter Driver Signature    "
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Any Issues 
              </Form.Label>
              <Form.Control
                onChange={(e) => handleInputChange("anyIssues", e.target.value)}
                type="text"
                required
                placeholder="Enter   Any Issues"
              />
            </Form.Group>

            <div className="save-as-draft-btn123">
              <button  className="btn1233" type="submit">
                SUBMIT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default MilageLog2;
