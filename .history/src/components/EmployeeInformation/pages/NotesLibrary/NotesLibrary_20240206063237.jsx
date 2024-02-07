/** @format */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../api/api";

const NotesLibrary = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    getData(setData, `superAdmin/getAllBhrfTherapyTopic`);
  }, []);

  console.log(data.data);

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
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>NOTES LIBRARY</p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <p style={{ fontSize: "1rem", fontWeight: "bold" }}>SESSION MANUAL</p>
          <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
            BEHAVIORAL HEALTH RESIDENTIAL FACILITY
          </p>
          {data?.data?.map((i ,index) => (
            <>
              
            </>
          ))}
        
        </div>
      </div>
    </>
  );
};

export default NotesLibrary;
