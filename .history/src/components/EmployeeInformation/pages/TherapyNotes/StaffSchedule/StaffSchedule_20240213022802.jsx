/** @format */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../../../../Baseurl";
import Loader from "../../../../Loader/Loader";

const StaffSchedule = () => {
  const navigate = useNavigate();
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
  const updateMonth = month < 10 ? `0${month}` : month;
  const year = today.getFullYear();

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
  }, [profile]);

  const renderTable = (startIndex, endIndex) => {
    return (
      <div className="staff_schedule_sheet">
        <table>
          <thead>
            <tr>
              <th>Shift</th>
              {data?.slice(startIndex, endIndex)?.map((day, index) => (
                <th key={`head${index}`}>
                  <span>{day.day}</span>
                  <br />
                  <span>{day.currentDate}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Am to Am</td>
              {data?.slice(startIndex, endIndex)?.map((day, index) => (
                <td key={`amToAm${index}`}>
                  {day.schedule.find((item) => item.type === "amToPm")?.start}
                  {" - "}
                  {day.schedule.find((item) => item.type === "amToPm")?.end}
                </td>
              ))}
            </tr>
            <tr>
              <td>Am to Pm</td>
              {data?.slice(startIndex, endIndex)?.map((day, index) => (
                <td key={`amToPm${index}`}>
                  {day.schedule.find((item) => item.type === "amToPm")?.start}
                  {" - "}
                  {day.schedule.find((item) => item.type === "amToPm")?.end}
                </td>
              ))}
            </tr>
            <tr>
              <td>Pm to Am</td>
              {data?.slice(startIndex, endIndex)?.map((day, index) => (
                <td key={`pmToAm${index}`}>
                  {day.schedule.find((item) => item.type === "pmToAm")?.start}
                  {" - "}
                  {day.schedule.find((item) => item.type === "pmToAm")?.end}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const generateTables = () => {
    const tableCount = Math.ceil(data?.length / 7);
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
    "January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , ""

  ]

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            STAFF SCHEDULE
          </p>
          <p>
          </p>
        </div>
      </div>

      <div className="monthOnLast">
        {updateMonth} / {year}
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
        </>
      )}
    </>
  );
};

export default StaffSchedule;
