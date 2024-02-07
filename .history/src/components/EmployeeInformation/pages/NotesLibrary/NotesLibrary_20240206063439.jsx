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
              {i.notesSummary?.map((notes , index )  => (
                
              ))}
              <p style={{ fontWeight: "500" }}>
                The staff presented the topic Building trust and rapport to
                resident and laid emphasis on how crucial it is to the various
                aspects of life, including personal relationships, business
                interactions, time in treatment and professional settings. Trust
                is the foundation upon which successful relationships are built,
                and rapport enhances communication and collaboration. Staff
                further highlighted the following as ways to establish trust and
                rapport:
              </p>
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
              <p style={{ fontWeight: "500" }}>
                1. Resident is encouraged to carryout the following for all
                round success in the course of recovery; Assessment key
                relationships or situations and Identify areas that need
                improvement. <br /> 2. Resident is encouraged to Set clear goals
                for building trust and rapport and determine what specific
                outcomes you want to achieve. <br /> 3. Resident is encouraged
                to develop a plan that includes actionable steps to achieve
                their goals. <br /> 4. Resident is encouraged to seeking
                guidance from mentors or coaches who excel in building trust and
                rapport.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotesLibrary;
