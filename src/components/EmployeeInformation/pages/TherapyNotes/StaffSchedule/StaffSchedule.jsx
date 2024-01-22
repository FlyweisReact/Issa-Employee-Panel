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
  // function renderEventContent(eventInfo) {
  //   console.log('Event Info:', eventInfo);
  //   const { amToAm, amToPm, pmToAm, day, date } = eventInfo.event.extendedProps.schedule;
  
  //   return (
  //     <>
    
  //     <i>{`${amToAm}`}</i>
  //     <br />
  //     <i>{`${amToPm}`}</i>
  //     <br />
  //     <i>{`${pmToAm}`}</i>
  //     <br />
  //   </>
  //   );
  // }
  
  const getEmployeeSchedule = () => {
    axios.get(`${Baseurl}employee/getProfile`, Auth())
      .then((res) => {
        console.log(res.data?.data);
        const employeeId = res.data?.data?._id;
  
        if (employeeId) {
          axios.get(`${Baseurl}StaffSchedule/getStaffSchedule`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            params: {
              employeeId: employeeId,
            },
          })
            .then((res) => {
            
  
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
              const yearData = res.data?.data?.year;
              console.log(res?.data?.data?.schedule, 'SCHEDULE DATA');
              console.log(res.data?.data);
              console.log(monthData, yearData);
  
              const formattedEvents = res.data?.data?.schedule.flatMap((schedule) => {
                const eventFormats = [
                  { title: 'amToAm', time: schedule.amToAm },
                  { title: 'amToPm', time: schedule.amToPm },
                  { title: 'pmToAm', time: schedule.pmToAm },
                ];
  
                return eventFormats.map((eventFormat) => ({
                  title: `${eventFormat.time}`,
                  start: new Date(`${yearData}-${padNumber(monthData)}-${padNumber(schedule.date)}T${eventFormat.time.split(' ')[0]}`),
                }));
              });
              console.log(formattedEvents, 'Event Formats');
  
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
          

   
          <div style={{ width: "100%" }}>
            {" "}
            <FullCalendar
  plugins={[dayGridPlugin]}
  initialView="dayGridMonth"
  events={events}
  
/>

          </div>
          
        </div>
      </div>
    </>
  );
};

export default StaffSchedule;
