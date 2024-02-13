/** @format */

import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

export const ReferenceCheck = () => {
  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div className="nav-div-personal">
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            REFERENCE CHECK & RECOMMENDATIONS
          </p>
        </div>
      </div>
      <Form className="main-div-personal important">
        <div className="top-div-personal">
          <div
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Reference :
              </Form.Label>
              <Form.Control required type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date of Contact:
              </Form.Label>
              <Form.Control required type="Date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Reference Recommendation:
              </Form.Label>
              <Form.Control required type="text" placeholder="Enter  text" />
            </Form.Group>

            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button type="button" className="signed">
                  {" "}
                  SAVED AND SIGNED
                </button>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Reference :
              </Form.Label>
              <Form.Control required type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date of Contact:
              </Form.Label>
              <Form.Control required type="Date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Reference Recommendation:
              </Form.Label>
              <Form.Control required type="text" placeholder="Enter  text" />
            </Form.Group>

            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button type="button" className="signed">
                  {" "}
                  SAVED AND SIGNED
                </button>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Reference :
              </Form.Label>
              <Form.Control required type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date of Contact:
              </Form.Label>
              <Form.Control required type="Date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Reference Recommendation:
              </Form.Label>
              <Form.Control required type="text" placeholder="Enter  text" />
            </Form.Group>

            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button type="button" className="signed">
                  {" "}
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
              <button className="btn1233" type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};
