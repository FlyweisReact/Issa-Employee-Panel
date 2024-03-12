/** @format */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../Baseurl";
import { downloadReport } from "../../Repository/Apis";
import Loader from "../../components/Loader/Loader";
import HOC from "../../Layout/Inner/HOC";

const TimeSheet = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [updateMonth, setUpdatedMonth] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const getProfile = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/getProfile`,
        Auth()
      );
      setProfile(res.data.data._id);
    } catch {}
  };

  useEffect(() => {
    getProfile();
  }, []);

  const today = new Date();

  useEffect(() => {
    setMonth(today.getMonth() + 1);
    setYear(today.getFullYear());
  }, []);

  useEffect(() => {
    if (month) {
      setUpdatedMonth(month < 10 ? `0${month}` : month);
    }
  }, [month]);

  const getAppointments = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}StaffSchedule/getStaffScheduleByEmployeeId`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            employeeId: profile,
            year: year,
            month: updateMonth,
          },
        }
      );
      setData(res?.data?.data);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (profile) {
      getAppointments();
    }
  }, [profile, year, updateMonth]);

  const renderTable = (startIndex, endIndex) => {
    return (
      <div className="staff_schedule_sheet">
        <table>
          <thead>
            <tr>
              <th>Shift</th>
              {/* {data?.slice(startIndex, endIndex)?.map((day, index) => (
                <th key={`head${index}`}>
                  <span>{day.day}</span>
                  <br />
                  <span>{day.currentDate}</span>
                </th>
              ))} */}
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7am to 2pm</td>
              <td>Employee1</td>
              <td>Employee2</td>
              <td>Employee1</td>
              <td>Employee1</td>
              <td>Employee2</td>
              <td>Employee1</td>
              <td>Employee1</td>
              {/* {data?.slice(startIndex, endIndex)?.map((day, index) => (
                <td key={`amToAm${index}`}>
                  {day.schedule.find((item) => item.type === "amToPm")?.start}
                  {" - "}
                  {day.schedule.find((item) => item.type === "amToPm")?.end}
                </td>
              ))} */}
            </tr>
            <tr>
              <td>2pm to 10am</td>
              {/* {data?.slice(startIndex, endIndex)?.map((day, index) => (
                <td key={`amToPm${index}`}>
                  {day.schedule.find((item) => item.type === "amToPm")?.start}
                  {" - "}
                  {day.schedule.find((item) => item.type === "amToPm")?.end}
                </td>
              ))} */}
              <td>Employee1</td>
              <td>Employee2</td>
              <td>Employee1</td>
              <td>Employee1</td>
              <td>Employee2</td>
              <td>Employee1</td>
              <td>Employee1</td>
            </tr>
            <tr>
              <td>10am to 7pm</td>
              {/* {data?.slice(startIndex, endIndex)?.map((day, index) => (
                <td key={`pmToAm${index}`}>
                  {day.schedule.find((item) => item.type === "pmToAm")?.start}
                  {" - "}
                  {day.schedule.find((item) => item.type === "pmToAm")?.end}
                </td>
              ))} */}
              <td>Employee1</td>
              <td>Employee2</td>
              <td>Employee1</td>
              <td>Employee1</td>
              <td>Employee2</td>
              <td>Employee1</td>
              <td>Employee1</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const generateTables = () => {
    const tableCount = Math.ceil(28 / 7);
    // const tableCount = Math.ceil(data?.length / 7);
    const tables = [];

    for (let i = 0; i < tableCount; i++) {
      const startIndex = i * 7;
      const endIndex = Math.min((i + 1) * 7, data?.length);
      tables.push(
        <div key={`table${i}`}>{renderTable(startIndex, endIndex)}</div>
      );
    }
    return tables;
  };

  const monthInEng = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const MonthHandler = (newMonth) => {
    if (newMonth > 12) {
      setYear(year + 1);
      setMonth(1);
    } else if (newMonth < 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(newMonth);
    }
  };

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            <p id="drColter" className="menu-sidebar"></p> EMPLOYEE SCHEDULE
          </p>
          <p
            onClick={() => navigate("/employee-schedule")}
            style={{
              paddingRight: "3px",
              color: "#0C5C75",
              textDecoration: "underline",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            TIME SHEET{" "}
          </p>
        </div>
      </div>

      <div className="monthOnLast fw-bold">
        <i
          className="fa-solid fa-caret-left"
          onClick={() => MonthHandler(month - 1)}
        ></i>
        <p>
          Month/Year : {monthInEng[updateMonth - 1]} {year}
        </p>
        <i
          className="fa-solid fa-caret-right"
          onClick={() => MonthHandler(month + 1)}
        ></i>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          {generateTables()}
          <div className="scheduling_form">
            <h5>
              Administrator, House manager, BHT and Registered Nurse are On-Call
              24/7
            </h5>
            <form>
              <div>
                <label>Administrator and Number</label>
                <input type="text" value={data?.[0]?.administratorAndNumber} />
              </div>
              <div>
                <label>Registered Nurse and Number</label>
                <input
                  type="text"
                  value={data?.[0]?.registeredNurseAndNumber}
                />
              </div>
              <div>
                <label>BHT Name and Number</label>
                <input type="text" value={data?.[0]?.bhtNameAndNumber} />
              </div>
            </form>
          </div>

          <button
            className="print_btn"
            onClick={() => downloadReport(`EMPLOYEE_SCHEDULE`)}
          >
            PRINT REPORT{" "}
          </button>
        </>
      )}
    </>
  );
};

export default HOC(TimeSheet);
