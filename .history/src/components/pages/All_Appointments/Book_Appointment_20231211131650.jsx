import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
const BookAppointment = () => {
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
          <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
            BOOK NEW APPOINTMENT
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: "1rem",
            paddingTop: ".1rem",
            paddingBottom: ".8rem",
            borderRadius: "10px",
          }}
          className="top-div-personal"
        >
          <Form
            style={{ width: "100%" }}
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
              Booking Details
            </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Name:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Contact Number:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Reason For Visit:
              </Form.Label>
              <Form.Control as={"textarea"} rows={3} placeholder="Type Here" />
            </Form.Group>

            <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
              Choose your Slot
            </p>

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Appointment Date:
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3 mt-5">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Time Slot :
              </Form.Label>
              <Form.Select
                style={{ opacity: "60%" }}
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                <option value="1">9:30am (Morning)</option>
                <option value="2">10:00am (Morning)</option>
                <option value="3">10:30am (Morning)</option>
                <option value="3">11:00am (Morning)</option>
                <option value="3">11:30am (Morning)</option>
                <option value="3">12:00pm (Afternoon)</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
        <div
          style={{
            padding: "0.5rem",
            backgroundColor: "#D9D9D9",
            width: "35%",
            marginBottom: "5rem",
            marginTop: "5rem",
          }}
          className="save-as-draft-btn123"
        >
          <button
            style={{ width: "100%", margin: "auto", borderRadius: "8px" }}
            className="btn1233"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
