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
      <div>
        <img
          src="/Employment/Personal_Information.png"
          onClick={() => navigate("/personal-information-form")}
          alt="Employment"
        />
      </div>
      <div>
        <img
          onClick={() => navigate("/offer-letter-form")}
          src="/Employment/Offer_Letter.png"
          alt="Employment"
        />
      </div>
      <div>
        <img
          onClick={() => navigate("/appendix")}
          src="/Employment/Appendix.png"
          alt="Employment"
        />
      </div>
      <div>
        <img
          onClick={() => navigate("/forms-2023")}
          src="/Employment/2023_Forms.png"
          alt="Employment"
        />
      </div>
      <div>
        <img
          onClick={() => navigate("/reference-check")}
          src="/Employment/Reference_Check.png"
          alt="Employment"
        />
      </div>
      <div>
        <img
          onClick={() => navigate("/lrc-1031a")}
          src="/Employment/LRC-1031A.png"
          alt="Employment"
        />
      </div>
      <div>
        <img onClick={() => navigate("/job-description")} src="/Employment/Job_Description.png" alt="Employment" />
      </div>
      <div>
        <img onClick={() => navigate("/fw4")} src="/Employment/fw4.png" alt="Employment" />
      </div>
      <div>
        <img
          onClick={() => navigate("/")}
          src="/Employment/APS_Consent.png"
          alt="Employment"
        />
      </div>
      <div>
        <img onClick={() => navigate("/termination")} src="/Employment/.png" alt="Employment" />
      </div>
      <div>
        <img onClick={() => navigate("/")} src="/Employment/.png" alt="Employment" />
      </div>
      <div>
        <img onClick={() => navigate("/")} src="/Employment/i-9.png" alt="Employment" />
      </div>
    </div>
  );
};

export default HOC(Employment);
