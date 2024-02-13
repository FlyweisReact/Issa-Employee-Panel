/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../api/api.js";
import { InputMaker, MultiSelect } from "../../../Helper/Makers.js";

const options = [
  {
    label: "Protect resident rights",
    value: "Protect resident rights",
  },
  {
    label:
      "Provide treatment that promotes resident dignity, independence, individuality, strengths, privacy and choice",
    value:
      "Provide treatment that promotes resident dignity, independence, individuality, strengths, privacy and choice",
  },
  {
    label:
      "Recognize obvious symptoms of a mental disorder, personality disorder, or substance abuse",
    value:
      "Recognize obvious symptoms of a mental disorder, personality disorder, or substance abuse",
  },
  {
    label:
      "Provide the behavioral health services that the agency is authorized to provide and that the staff member is qualified to provide",
    value:
      "Provide the behavioral health services that the agency is authorized to provide and that the staff member is qualified to provide",
  },
  {
    label:
      "Meet the unique needs of the resident populations served by the agency or the staff member, adults age18 and older, individuals who have substance abuse problems, individuals who are seriously mentally ill, or individuals who have co-occurring disorders",
    value:
      "Meet the unique needs of the resident populations served by the agency or the staff member, adults age18 and older, individuals who have substance abuse problems, individuals who are seriously mentally ill, or individuals who have co-occurring disorders",
  },
  {
    label:
      "Protect and maintain the confidentiality of resident records and information",
    value:
      "Protect and maintain the confidentiality of resident records and information",
  },
  {
    label: "Recognize and respect cultural differences",
    value: "Recognize and respect cultural differences",
  },
  {
    label: "Recognize, prevent, and respond to a situation in which a resident",
    value: "Recognize, prevent, and respond to a situation in which a resident",
  },
  {
    label: "May be a danger to self or a danger to others",
    value: "May be a danger to self or a danger to others",
  },
  {
    label: "Behaves in an aggressive or destructive manner",
    value: "Behaves in an aggressive or destructive manner",
  },
  {
    label: "May be experiencing a crisis situation, or",
    value: "May be experiencing a crisis situation, or",
  },
  {
    label: "May be experiencing a medical emergency",
    value: "May be experiencing a medical emergency",
  },
  {
    label: "Read and implement a resident’s treatment plan",
    value: "Read and implement a resident’s treatment plan",
  },
  {
    label: "Assist a resident in accessing community services and resources",
    value: "Assist a resident in accessing community services and resources",
  },
  {
    label: "Record and document resident information",
    value: "Record and document resident information",
  },
  {
    label:
      "Demonstrate ethical behavior, such as by respecting staff member and resident boundaries and recognizing the inappropriateness of receiving gratuities from a resident",
    value:
      "Demonstrate ethical behavior, such as by respecting staff member and resident boundaries and recognizing the inappropriateness of receiving gratuities from a resident",
  },
  {
    label:
      "Identify types of medications commonly prescribed for mental disorders, personality disorders, and substance abuse and the common side effects and adverse reactions of the medications",
    value:
      "Identify types of medications commonly prescribed for mental disorders, personality disorders, and substance abuse and the common side effects and adverse reactions of the medications",
  },
  {
    label:
      "Recognize and respond to a fire, disaster, hazard, and medical emergency",
    value:
      "Recognize and respond to a fire, disaster, hazard, and medical emergency",
  },
  {
    label:
      "Provide the activities or behavioral health services identified in the staff member’s job description or the agency’s policies and procedures",
    value:
      "Provide the activities or behavioral health services identified in the staff member’s job description or the agency’s policies and procedures",
  },
  {
    label: "Being able to conduct group counseling",
    value: "Being able to conduct group counseling",
  },
];

const Skills = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [value, setValue] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const getAllData = () => {
    getData(setData, "employee/getAllSkillAndKnowledge");
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = (id) => {
    deleteData("employee/deleteSkillAndKnowledge", id);
  };

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
            <br />
            <MultiSelect options={options} setValue={setValue} value={value} />
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

          <div>
            <p style={{ fontWeight: "bold" }}>Employee signature and title</p>
            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button type="button" className="signed">
                  {" "}
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {" "}
                <p>Digitally Sign by Employee Name / date </p>
              </div>
            </div>
          </div>

          <InputMaker
            label={
              "Verified by Clinical Director /BHP/Administrator Signature/ title"
            }
            setState={set}
          />

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
