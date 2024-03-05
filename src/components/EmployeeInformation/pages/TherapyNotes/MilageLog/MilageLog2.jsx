/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { Auth, showMsg } from "../../../../../Baseurl";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import NavWrapper from "../../../../../Helper/NavWrapper";

const MilageLog2 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          showMsg("Error", err.response.data.message, "error");
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
      showMsg("Error", error.message, "error");
      setLoading(false);
    }
  };

  return (
    <>
    <NavWrapper title="Milega Log" isArrow={true} />
   
  
      <div>


        <div className="top-div-personal">
          <Form className="form-personal" onSubmit={submitHandler}>
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
                type="text"
                required
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
                }
                required
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
              <button className="btn1233" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default MilageLog2;
