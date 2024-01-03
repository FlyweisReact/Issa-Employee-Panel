import React from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
export const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="main-div-register">
      <div className="top-div-register">
        <div className="top-div-image-register">
          <img
            style={{ cursor: "pointer" }}
            src="/back_button.png"
            onClick={() => navigate(-1)}
            alt="back_button"
          />
        </div>
        <div className="bottom-div-register">
          <div className="register-form">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "1.4rem",
                color: "black",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              REGISTRATION
            </h2>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "1.0rem",
                color: "black",
                textAlign: "center",
                marginTop: "3%",
                marginBottom: "5%",
              }}
            >
              Please fill the details to continue your Registration Process
            </h2>

            <div className="form-group">
              <label htmlFor="first_name" className="form-label">
                First Name
              </label>
              <input className="form-control" id="first_name" />
            </div>

            <div className="form-group">
              <label htmlFor="last_name" className="form-label">
                Last Name
              </label>
              <input className="form-control" id="last_name" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" />
            </div>

            <div className="form-group">
              <label htmlFor="number" className="form-label">
                Password
              </label>
              <input type="number" className="form-control" id="password" />
            </div>

            <button className="continue-btn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};
