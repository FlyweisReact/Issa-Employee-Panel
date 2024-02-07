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
              <p style={{ fontWeight: "500" }}>
                1. Active Listening:
                <span style={{ fontWeight: "bold" }}>
                  - Listen attentively to what others have to say without <br />
                  interrupting or judging. - Show empathy and understanding by
                  reflecting their emotions and concerns.
                  <br />- Ask clarifying questions to ensure you grasp their
                  perspective accurately.
                </span>
              </p>
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
