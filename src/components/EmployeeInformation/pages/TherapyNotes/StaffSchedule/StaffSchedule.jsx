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
  const [events, setEvents] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  function renderEventContent(eventInfo) {
    console.log('Event Info:', eventInfo);
    const { amToAm, amToPm, pmToAm, day, date } = eventInfo.event.extendedProps.schedule;
  
    return (
      <>
        <b>{`Date: ${date}, Day: ${day}`}</b>
        <br />
        <span>{`AM to AM: ${amToAm}, AM to PM: ${amToPm}, PM to AM: ${pmToAm}`}</span>
        <br />
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  
  const getEmployeeSchedule = () => {
    axios.get(`${Baseurl}employee/getProfile`, Auth())
      .then((res) => {
        console.log(res.data?.data);
        setEmployeeId(res.data?.data?._id);
  
        if (res.data?.data?._id) {
          axios.get(`${Baseurl}StaffSchedule/getStaffSchedule`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            params: {
              employeeId: res.data?.data?._id,
            },
          })
            .then((res) => {
              console.log(res.data?.data);
  
              const monthsDatas = [
                { name: "January", value: 1 },
                { name: "February", value: 2 },
                { name: "March", value: 3 },
                { name: "April", value: 4 },
                { name: "May", value: 5 },
                { name: "June", value: 6 },
                { name: "July", value: 7 },
                { name: "August", value: 8 },
                { name: "September", value: 9 },
                { name: "October", value: 10 },
                { name: "November", value: 11 },
                { name: "December", value: 12 },
              ];
  
              const monthData = res.data?.data?.month;
              const monthName = monthsDatas.find((month) => month.value === monthData)?.name;
              const yearData = res.data?.data?.year;
              console.log(monthData, yearData);
  
              const formattedEvents = res.data?.data?.schedule.map((schedule) => ({
                title: 'Event Title',
                start: new Date(),
                end: `${yearData}-${padNumber(monthData)}-${padNumber(schedule.date)}T${schedule.amToPm.split(' ')[0]}`,
                extendedProps: {
                  schedule: schedule,
                },
              }));
  
              setEvents(formattedEvents);
           
              console.log(formattedEvents, 'Formatted Events');
            })
            .catch((error) => {
              console.error("Error fetching staff schedule:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching employee profile:", error);
      });
  };
  
  const padNumber = (num) => (num < 10 ? `0${num}` : num);
  
  
  useEffect(() => {
    getEmployeeSchedule();
  },[ employeeId ]);
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
