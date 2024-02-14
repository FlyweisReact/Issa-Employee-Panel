/** @format */
import { Link, useNavigate } from "react-router-dom";
import HOC2 from "../layout/HOC2";

const Training = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav-wrap-personal">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>TRAINING</p>
          <p></p>
        </div>
      </div>
      
    </>
  );
};

export default HOC2(Training);
