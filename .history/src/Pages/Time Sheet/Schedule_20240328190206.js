/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import HOC from "../../Layout/Inner/HOC";
import { Container } from "react-bootstrap";
import NavWrapper from "../../Helper/NavWrapper";
import { DefaultInput } from "../../Helper/Makers";
import NoFound from "../../components/Loader/NoFound";

const Schedule = () => {
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [updateMonth, setUpdatedMonth] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [sortedData, setSortedData] = useState([]);
  const [adminstratordata, setAdministratorData] = useState({});

  const getProfile = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/getProfile`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
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
      setAdministratorData(res?.data?.administratorData);
      setLoading(false);
    } catch {
      setLoading(false);
      setData([]);
    }
  };

  useEffect(() => {
    if (profile) {
      getAppointments();
    }
  }, [profile, year, updateMonth]);

  useEffect(() => {
    if (data?.length > 0) {
      setSortedData([...data]?.sort((a, b) => a?.currentDate - b?.currentDate));
    }
  }, [data]);

  const renderTable = (startIndex, endIndex) => {
    const uniqueShiftIds = Array.from(
      new Set(
        sortedData?.flatMap((day) =>
          day?.schedule.map((item) => item.shiftId?._id)
        )
      )
    );

    return (
      <div className="staff_schedule_sheet">
        <table>
          <thead>
            <tr>
              <th>Shift</th>
              {sortedData?.slice(startIndex, endIndex)?.map((day, index) => (
                <th key={`head${index}`}>
                  <span>{day?.day}</span>
                  <br />
                  <span>{day?.currentDate}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {uniqueShiftIds.map((shiftId, shiftIndex) => (
              <tr key={`shift${shiftIndex}`}>
                <td>
                  {
                    data
                      .find((day) =>
                        day?.schedule.some(
                          (item) => item.shiftId?._id === shiftId
                        )
                      )
                      ?.schedule.find((item) => item.shiftId?._id === shiftId)
                      ?.shiftId?.start
                  }{" "}
                  -{" "}
                  {
                    data
                      .find((day) =>
                        day?.schedule.some(
                          (item) => item.shiftId?._id === shiftId
                        )
                      )
                      ?.schedule.find((item) => item.shiftId?._id === shiftId)
                      ?.shiftId?.end
                  }
                </td>
                {data?.slice(startIndex, endIndex)?.map((day, index) => (
                  <td key={`cell${index}`}>
                    {day?.schedule
                      .filter((item) => item.shiftId?._id === shiftId)
                      .map((item, itemIndex) => (
                        <div key={`item${itemIndex}`}>
                          {item.employeeId?.fullName}
                        </div>
                      ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const generateTables = () => {
    const tableCount = Math.ceil(sortedData?.length / 7);
    const tables = [];
    for (let i = 0; i < tableCount; i++) {
      const startIndex = i * 7;
      const endIndex = Math.min((i + 1) * 7, sortedData?.length);
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
      <NavWrapper title={"EMPLOYEE SCHEDULE"} isArrow={true} />

      <Container className="full-width-container">
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
            {data?.length > 0 ? (
              <>
                <Container>
                  {generateTables()}
                  <p className="fw-bold text-desc text-center mt-5">
                    {" "}
                    Administrator, House manager, BHT and Registered Nurse are
                    On-Call 24/7
                  </p>
                  <div className="grid-container">
                    <div className="grid-item full-wid-input">
                      <label>Administrator and Number</label>
                      <DefaultInput
                        value={adminstratordata?.administratorAndNumber}
                      />
                    </div>
                    <div className="grid-item full-wid-input">
                      <label>Registered Nurse and Number</label>
                      <DefaultInput
                        value={adminstratordata?.registeredNurseAndNumber}
                      />
                    </div>
                    <div className="grid-item full-wid-input">
                      <label>BHT Name and Number</label>
                      <DefaultInput
                        value={adminstratordata?.bhtNameAndNumber}
                      />
                    </div>
                  </div>
                </Container>
              </>
            ) : (
              <NoFound />
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default HOC(Schedule);
