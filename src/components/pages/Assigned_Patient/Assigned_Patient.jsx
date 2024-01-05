import React from "react";
import HOC from "../../layout/HOC";
import "./Assigned.css";

const Assigned_Patient = () => {
  const getAllUpcomingPatients = () => {};
  return (
    <div className="main-div-assigned important">
      <div className="upcoming-assigned">
        <h3>Upcoming Patient</h3>
        <div className="upcoming-div-assigned">
          <div className="img-div-assigned">
            <div>
              <img src="/Assigned_Patient/patient.png" alt="51" />
            </div>
            <div>
              <p style={{ color: "#0C5C75", lineHeight: 1 }}>Patient 1</p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/calender.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  FROM :
                </span>
                <span>6 June-21 June</span>
              </p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/location.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  AGE :
                </span>
                <span>32 YEARS</span>
              </p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/id.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  REFERENCE ID :
                </span>
                <span>6 June-21 June</span>
              </p>
            </div>
          </div>
          <div className="img-div-assigned">
            <div>
              <img src="/Assigned_Patient/patient.png" alt="51" />
            </div>
            <div>
              <p style={{ color: "#0C5C75", lineHeight: 1 }}>Patient 1</p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/calender.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  FROM :
                </span>
                <span>6 June-21 June</span>
              </p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/location.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  AGE :
                </span>
                <span>32 YEARS</span>
              </p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/id.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  REFERENCE ID :
                </span>
                <span>6 June-21 June</span>
              </p>
            </div>
          </div>
          <div className="img-div-assigned">
            <div>
              <img src="/Assigned_Patient/patient.png" alt="51" />
            </div>
            <div>
              <p style={{ color: "#0C5C75", lineHeight: 1 }}>Patient 1</p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/calender.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  FROM :
                </span>
                <span>6 June-21 June</span>
              </p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/location.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  AGE :
                </span>
                <span>32 YEARS</span>
              </p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/id.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  REFERENCE ID :
                </span>
                <span>6 June-21 June</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="upcoming-assigned">
        <h3>Past Patient</h3>
        <div className="upcoming-div-assigned">
          <div className="img-div-assigned">
            <div>
              <img src="/Assigned_Patient/patient.png" alt="51" />
            </div>
            <div>
              <p style={{ color: "#0C5C75", lineHeight: 1 }}>Patient 1</p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/calender.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  FROM :
                </span>
                <span>6 June-21 June</span>
              </p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/location.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  AGE :
                </span>
                <span>32 YEARS</span>
              </p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/id.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  REFERENCE ID :
                </span>
                <span>6 June-21 June</span>
              </p>
            </div>
          </div>
          <div className="img-div-assigned">
            <div>
              <img src="/Assigned_Patient/patient.png" alt="51" />
            </div>
            <div>
              <p style={{ color: "#0C5C75", lineHeight: 1 }}>Patient 1</p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/calender.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  FROM :
                </span>
                <span>6 June-21 June</span>
              </p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/location.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  AGE :
                </span>
                <span>32 YEARS</span>
              </p>
              <p className="para-assigned">
                <img src="/Assigned_Patient/id.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  REFERENCE ID :
                </span>
                <span>6 June-21 June</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOC(Assigned_Patient);
