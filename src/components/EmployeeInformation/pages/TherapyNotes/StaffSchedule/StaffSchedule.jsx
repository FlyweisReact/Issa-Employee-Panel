import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const StaffSchedule = () => {
  const navigate = useNavigate();
  const events = [{ title: "Meeting", start: new Date() }];
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
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
            STAFF SCHEDULE
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          {/* <Table
            style={{ borderColor: "black", textAlign: "center" }}
            responsive
            bordered
          >
            <thead>
              <tr>
                <th>Shift</th>
                <th> Monday</th>
                <th>
                  Tuesday <br />1
                </th>
                <th>
                  Wednesday <br />2{" "}
                </th>
                <th>
                  Thursday <br />3
                </th>
                <th>
                  Friday <br />4
                </th>
                <th>
                  Saturday <br />5
                </th>
                <th>
                  Sunday <br />6
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ border: "1px solid black" }}>
                <td>am to am</td>
                <td>1</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td>am to pm </td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td>pm to am</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table> */}

          {/* Calender */}
          <div style={{ width: "90%" }}>
            {" "}
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
              eventContent={renderEventContent}
            />
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "1rem",
              fontWeight: "bold",
              marginTop: "2rem",
            }}
          >
            Administrator, House manager, BHT and Registered Nurse are On-Call
            24/7
          </p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Administrator and Number:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              BHT Name and Number:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              BHT Name and Number:
            </Form.Label>
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

export default StaffSchedule;
