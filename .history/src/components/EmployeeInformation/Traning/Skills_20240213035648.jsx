/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../api/api.js";

const Skills = () => {
  const navigate = useNavigate();

  const [data, setData] = React.useState([]);

  const getAllData = () => {
    getData(setData, "employee/getAllSkillAndKnowledge");
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = (id) => {
    deleteData("employee/deleteSkillAndKnowledge", id);
  };

  const options = [
    {
      label: "Protect resident rights",
      value: "Protect resident rights",
    },
    {
      label: "Provide treatment that promotes resident dignity, independence, individuality, strengths, privacy and choice",
      value: "Provide treatment that promotes resident dignity, independence, individuality, strengths, privacy and choice",
    },
    {
      label: "Recognize obvious symptoms of a mental disorder, personality disorder, or substance abuse",
      value: "Recognize obvious symptoms of a mental disorder, personality disorder, or substance abuse",
    },
    {
      label: "Provide the behavioral health services that the agency is authorized to provide and that the staff member is qualified to provide",
      value: "Provide the behavioral health services that the agency is authorized to provide and that the staff member is qualified to provide",
    },
    {
      label: "Meet the unique needs of the resident populations served by the agency or the staff member, adults age18 and older, individuals who have substance abuse problems, individuals who are seriously mentally ill, or individuals who have co-occurring disorders",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
  ];

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            paddingRight: "1rem",
          }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            SKILLS AND KNOWLEDGE TRAINING
          </p>
          <p>
            <Button onClick={() => navigate("/employee/training/skills2")}>
              + NEW
            </Button>
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <p>
            <span>
              <span>I ,</span>
              <span>
                <input
                  type="text"
                  className="wrapped_input"
                  placeholder={data?.data?.employeeName || "name"}
                />
              </span>
            </span>
            ,attest I have received{" "}
            <span>
              <input
                type="text"
                className="wrapped_input"
                placeholder={data?.data?.hoursCompleted || "designation"}
              />
            </span>
            hours of Skills and Knowledge training at COMPANY NAME completed to
            perform the job duties as consistent with my job description.
            <br />
            <li>Protect resident rights;</li>
            <li>
              Provide treatment that promotes resident dignity, independence,
              individuality, strengths, privacy, and choice;
            </li>
            <li>
              Recognize obvious symptoms of a mental disorder, personality
              disorder, or substance abuse;
            </li>
            <li>
              Provide the behavioral health services that the agency is
              authorized to provide and that the staff member is qualified to
              provide;
            </li>
            <li>
              Meet the unique needs of the resident populations served by the
              agency or the staff member, adults age 18 and older, individuals
              who have substance abuse problems, individuals who are seriously
              mentally ill, or individuals who have co-occurring disorders;
            </li>
            <li>
              Protect and maintain the confidentiality of resident records and
              information;
            </li>
            <li>Recognize and respect cultural differences;</li>
            <li>
              Recognize, prevent, and respond to a situation in which a
              resident:
              <li>May be a danger to self or a danger to others,</li>
              <li>Behaves in an aggressive or destructive manner,</li>
              <li>May be experiencing a crisis situation, or,</li>
              <li>May be experiencing a medical emergency.</li>
            </li>
            <li>Read and implement a resident’s treatment;</li>
            <li>
              Assist a resident in accessing community services and resources;
            </li>
            <li>Record and document resident information;</li>
            <li>
              Demonstrate ethical behavior, such as by respecting staff member
              and resident boundaries and recognizing the inappropriateness of
              receiving gratuities from a resident;
            </li>
            <li>
              Identify types of medications commonly prescribed for mental
              disorders, personality disorders, and substance abuse and the
              common side effects and adverse reactions of the medications;
            </li>
            <li>
              Recognize and respond to a fire, disaster, hazard, and medical
              emergency; and
            </li>
            <li>
              Provide the activities or behavioral health services identified in
              the staff member’s job description or the agency’s policies and
              procedures.
            </li>
            <li>Being able to conduct group counseling.</li>
          </p>
          <p style={{ fontWeight: "500" }}>
            <span style={{ fontWeight: "bold" }}>
              The above listed skills and knowledge were verified by:
            </span>
            <li>
              Visual observation of the staff member interacting with another
              individual, such as through role playing exercises;
            </li>
            <li>
              Verbal interaction with the staff member, such as interviewing,
              discussion, or question and answer
            </li>
          </p>

          <Table responsive>
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: "#D1ECF0",
                    borderRadius: "5px 0 0 0",
                  }}
                >
                  <input type="checkbox" />
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Employee Title</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Date</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Verified Title</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Date</th>

                <th
                  style={{
                    backgroundColor: "#D1ECF0",
                    borderRadius: "0 5px 0 0",
                  }}
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{data?.data?.employeeName}</td>
                <td>
                  {data?.data?.employeeDate
                    ?.split("T")[0]
                    .split("-")
                    .reverse()
                    .join("-")}
                </td>
                <td>{data?.data?.verifiedByTitle}</td>
                <td>{data?.data?.hoursCompleted}</td>
                <td
                  style={{
                    display: "flex",
                    gap: "1rem",
                    fontWeight: "bold",
                    color: "#1A9FB2",
                    alignItems: "center",
                    fontSize: "1.4rem",
                  }}
                >
                  <span>
                    {" "}
                    <FaRegEdit />
                  </span>
                  <span
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => handleDelete(data?.data?._id)}
                  >
                    {" "}
                    <RiDeleteBin5Fill style={{ color: "red" }} />
                    <span style={{ color: "red", fontSize: "1.1.1rem" }}>
                      DELETE
                    </span>
                  </span>
                </td>
              </tr>
              {data?.data?.length > 0 &&
                data?.data?.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <input type="checkbox" />
                    </td>

                    <td>{item.residentName}</td>
                    <td>{item.familyMember}</td>
                    <td>{item.email}</td>
                    <td>{item.date}</td>
                    <td>{item.caseManager}</td>
                    <td
                      style={{
                        display: "flex",
                        gap: "1rem",
                        fontWeight: "bold",
                        color: "#1A9FB2",
                        alignItems: "center",
                        fontSize: "1.4rem",
                      }}
                    >
                      <span>
                        {" "}
                        <FaRegEdit />
                      </span>
                      <span
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onClick={() => handleDelete(item._id)}
                      >
                        {" "}
                        <RiDeleteBin5Fill style={{ color: "red" }} />
                        <span style={{ color: "red", fontSize: "1.1.1rem" }}>
                          DELETE
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>

          <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
            <button
              style={{
                padding: "10px 24px",
                backgroundColor: "#1A9FB2",
                color: "white",
                marginTop: "1rem",
                borderRadius: "10px",
              }}
              type="submit"
            >
              PRINT REPORT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
