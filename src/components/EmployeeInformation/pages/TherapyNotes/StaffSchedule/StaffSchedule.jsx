import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import { useEffect } from "react";
import axios from "axios";
import { Auth, Baseurl } from "../../../../../Baseurl";
const StaffSchedule = () => {
  const navigate = useNavigate();
  const events = [{ title: "Meeting", start: new Date() }];
  const [employeeId, setEmployeeId] = useState("");
  function renderEventContent(eventInfo) {
  
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  const getEmployeeSchedule=()=>{
axios.get(`${Baseurl}employee/getProfile`, Auth()).then((res) => {
  console.log(res.data?.data);
  setEmployeeId(res.data?.data?._id)
  if(res.data?.data?._id){
    
    axios.get(`${Baseurl}StaffSchedule/getStaffSchedule}`, Auth()).then((res) => {
      console.log(res.data);
      
    })
  }
})
      
  }
  useEffect(() => {
    getEmployeeSchedule();
  },[])
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
          
        </div>
      </div>
    </>
  );
};

export default StaffSchedule;
