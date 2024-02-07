/** @format */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../../../Baseurl";
import Loader from "../../../Loader/Loader";

const TimeSheet = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

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
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  console.log(profile, year, month);

  const getAppointments = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}StaffSchedule/getStaffScheduleByEmployeeId`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = res?.data?.data?.schedule;
      setData(res?.data?.data);
      setEvents(data);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (profile) {
      getAppointments();
    }
  }, [profile]);

  const renderTable = (startIndex, endIndex) => {
    return (
      <div className="staff_schedule_sheet">
        <table>
          <thead>
            <tr>
              <th>Shift</th>
              {events?.slice(startIndex, endIndex).map((i, index) => (
                <th key={`head${index}`}>
                  {" "}
                  <span> {i.day} </span>
                  <br />
                  <span> {i.date} </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>am to am</td>
              {events?.slice(startIndex, endIndex).map((i, index) => (
                <td key={`amToam${index}`}> {i.amToAm} </td>
              ))}
            </tr>
            <tr>
              <td>am to pm</td>
              {events?.slice(startIndex, endIndex).map((i, index) => (
                <td key={`amToPm${index}`}> {i.amToPm} </td>
              ))}
            </tr>
            <tr>
              <td>pm to am</td>
              {events?.slice(startIndex, endIndex).map((i, index) => (
                <td key={`pmToAm${index}`}> {i.pmToAm} </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const generateTables = () => {
    const tableCount = Math.ceil(events?.length / 7);
    const tables = [];

    for (let i = 0; i < tableCount; i++) {
      const startIndex = i * 7;
      const endIndex = Math.min((i + 1) * 7, events.length);
      tables.push(
        <div key={`table${i}`}>{renderTable(startIndex, endIndex)}</div>
      );
    }

    return tables;
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
            onClick={() => navigate("/employee/employee-schedule")}
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
                <input
                  type="text"
                  defaultValue={data?.administratorAndNumber}
                />
              </div>
              <div>
                <label>Registered Nurse and Number</label>
                <input
                  type="text"
                  defaultValue={data?.registeredNurseAndNumber}
                />
              </div>
              <div>
                <label>BHT Name and Number</label>
                <input type="text" defaultValue={data?.bhtNameAndNumber} />
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default TimeSheet;
