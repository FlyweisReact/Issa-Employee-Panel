/** @format */

import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { getData } from "../../components/api/api";
import HOC from "../../Layout/Outer/HOC";

const Dashboard = () => {
  const navigate = useNavigate();
  const [upcommingPatinets, setUpcommingPatinets] = useState([]);

  const getAllPatients = () => {
    getData(setUpcommingPatinets, "employee/getAllUpcomingAppointments");
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  return (
    <>
            <Container className="full-width-container"></Container>
    
    </>
  );
};

export default HOC({ Wcomponenet: Dashboard });
