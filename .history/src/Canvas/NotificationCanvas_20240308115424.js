import React from 'react'
import { Offcanvas } from 'react-bootstrap'

const NotificationCanvas = ({show , handleClose}) => {
  return (
       <Offcanvas placement="end" show={showD} onHide={handleCloseD}>
        <Offcanvas.Body>
          <img
            onClick={() => setShowD(false)}
            src="/back_button2.png"
            style={{ cursor: "pointer", maxWidth: "35px", width: "auto" }}
            alt="fdn"
          />
          <div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "2rem",
                fontSize: ".3rem",
              }}
            >
              <Form.Group
                className="mb-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#1A9FB2",
                  opacity: "40%",
                  borderRadius: "8px",
                }}
                controlId="formBasicEmail"
              >
                <img
                  style={{ maxWidth: "40px", width: "auto", height: "25px" }}
                  src="/chat1.png"
                  alt="fdn"
                />
                <Form.Select
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "#1A9FB2",
                    opacity: "100%",
                    borderRadius: "8px",
                    color: "#A9FBF2",
                  }}
                  aria-label="Default select example"
                >
                  <option> Staff</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "red",
                  opacity: "40%",
                  borderRadius: "8px",
                }}
                controlId="formBasicEmail"
              >
                <img
                  style={{
                    maxWidth: "40px",
                    width: "auto",
                    height: "25px",
                    padding: ".2rem",
                  }}
                  src="/chat2.png"
                  alt="fdn"
                />
                <Form.Select
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "red",
                    opacity: "99%",
                    borderRadius: "8px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  aria-label="Default select example"
                >
                  <option> Center 1</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              borderRadius: "8px",
              padding: ".2rem 1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginBottom: "2.5rem",
            }}
          >
            <img
              style={{
                borderRadius: "50%",
                border: "1px solid black",
                maxWidth: "50px",
                maxHeight: "50px",
                width: "auto",
                height: "auto",
              }}
              src="/chat1.png"
              alt="fdn"
            />
            <span style={{ lineHeight: ".9rem" }}>
              <p style={{ fontWeight: "bold", paddingTop: "15px" }}>
                Naina Jhonson
              </p>
              <p style={{ opacity: "60%" }}>Have you check your appointment</p>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              borderRadius: "8px",
              padding: ".2rem 1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginBottom: "2.5rem",
            }}
          >
            <img
              style={{
                borderRadius: "50%",
                border: "1px solid black",
                maxWidth: "50px",
                maxHeight: "50px",
                width: "auto",
                height: "auto",
              }}
              src="/chat1.png"
              alt="fdn"
            />
            <span style={{ lineHeight: ".9rem" }}>
              <p style={{ fontWeight: "bold", paddingTop: "15px" }}>
                Naina Jhonson
              </p>
              <p style={{ opacity: "60%" }}>Have you check your appointment</p>
            </span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>{" "}
  )
}

export default NotificationCanvas