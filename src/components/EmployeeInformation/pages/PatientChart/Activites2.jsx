import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
const Activities2 = () => {
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
            ACTIVITIES OF DAILY LIVING TRACKING FORM
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form
            style={{ width: "100%" }}
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p>ADLS:</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Selecting Clothes
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Bathing or Showering
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Combing Hair
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Applying Lotion
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Laundry</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Dressing</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Shampooing Hair
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Oral Care Morning
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Breakfast</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Lunch</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Dinner</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Selecting Clothes
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Lunch</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>AM Snack</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Selecting Clothes
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Lunch</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>PM Snack</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Selecting Clothes
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Lunch</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                AM Bowel Movement
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Selecting Clothes
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Lunch</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                PM Bowel Movement
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Selecting Clothes
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Lunch</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Overnight Bowel Movement
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Hand & Foot nail care
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Hand & Foot nail care
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Selecting Clothes
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  id={`check-api-yes`}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3 mt-5">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Staff members are to initial once ADLs is completed on each
                shift.{" "}
              </Form.Label>
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
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  SAVE AS DRAFT
                </button>
                <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                  SAVED AND SAVED
                </button>
              </div>
            </div>
            {/* <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group> */}
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
          </Form>
        </div>
      </div>
    </>
  );
};

export default Activities2;
