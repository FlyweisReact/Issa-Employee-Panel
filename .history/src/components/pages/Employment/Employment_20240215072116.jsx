import React from "react";
import HOC from "../../layout/HOC";
import "./Employment.css";
import { useNavigate } from "react-router-dom";
const Employment = () => {
  const navigate = useNavigate();
  return (
    <div className="main-div-employment">
      <div>
        <img onClick={() => navigate("/employee/Dashboard")} src="/Employment/Application.png" alt="Employment" />
      </div>

    </div>
  );
};

export default HOC(Employment);
