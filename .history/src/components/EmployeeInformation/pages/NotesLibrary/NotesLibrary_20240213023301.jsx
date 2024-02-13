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
          
          {data?.data?.reverse()?.map((i, index) => (
            <div key={index}>
              <p
                style={{
                  color: "#1A9FB2",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {i.topic}
              </p>{" "}
              <p>NOTE SUMMARY:</p>
              {i.notesSummary?.map((notes, index) => (
                <p style={{ fontWeight: "500" }} key={`notes${index}`}>
                  {notes}
                </p>
              ))}
              <p style={{ fontWeight: "bold", marginBottom: "2rem" }}>
                PLAN/ RECOMMENDATION:
              </p>
              {i.planRecommendation?.map((plan, index) => (
                <p style={{ fontWeight: "500" }} key={`plan${index}`}>
                  {plan}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotesLibrary;
