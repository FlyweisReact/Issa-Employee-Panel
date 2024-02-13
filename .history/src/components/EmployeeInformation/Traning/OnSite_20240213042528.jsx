/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table, Modal } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteApi, editApi, fetchApi } from "../../../Repository/Apis.js";
import Loader from "../../Loader/Loader.js";
import { InputMaker, MultiSelect } from "../../../Helper/Makers.js";
import { ClipLoader } from "react-spinners";

const options = [
  {
    value: "Chain of Command",
    label: "Chain of Command",
  },
  {
    value: "Resident Rights",
    label: "Resident Rights",
  },
  {
    value:
      "Immediately report suspected or alleged abuse, neglect or exploitation or a violation of a resident’s rights",
    label:
      "Immediately report suspected or alleged abuse, neglect or exploitation or a violation of a resident’s rights",
  },
  {
    value: "Program evacuation path /Safety Disaster Plan",
    label: "Program evacuation path /Safety Disaster Plan",
  },
  {
    value: "Ethics/ professionalism",
    label: "Ethics/ professionalism",
  },
  {
    value: "Residents activities / treatment schedule",
    label: "Residents activities / treatment schedule",
  },
  {
    value: "Current Resident issues",
    label: "Current Resident issues",
  },
  {
    value: "Personnel – payroll, benefits, disciplinary process",
    label: "Personnel – payroll, benefits, disciplinary process",
  },
  {
    value: "Supervision ",
    label: "Supervision ",
  },
  {
    value: "Training Plan",
    label: "Training Plan",
  },
  {
    value: "Policy and Procedure Manual",
    label: "Policy and Procedure Manual",
  },
  {
    value: "Use of facility equipment.",
    label: "Use of facility equipment.",
  },
  {
    value:
      "Documentation in the medical record, and how information are protected",
    label:
      "Documentation in the medical record, and how information are protected",
  },
  {
    value: "Confidentiality/HIPAA",
    label: "Confidentiality/HIPAA",
  },
  {
    value: "Incident and Accident reporting",
    label: "Incident and Accident reporting",
  },
  {
    value: "Job description ",
    label: "Job description ",
  },
  {
    value: "Program Rules",
    label: "Program Rules",
  },
  {
    value:
      "Procedures for responding to a fire, disaster, hazard, a medical emergency and a resident experiencing a crisis situation.",
    label:
      "Procedures for responding to a fire, disaster, hazard, a medical emergency and a resident experiencing a crisis situation.",
  },
  {
    value: "Infectious diseases and blood borne pathogen.",
    label: "Infectious diseases and blood borne pathogen.",
  },
  {
    value: "Sexual Harassment- Q & A’s",
    label: "Sexual Harassment- Q & A’s",
  },
  {
    value: "Personal Protective Equipment",
    label: "Personal Protective Equipment",
  },
  {
    value: "Fire Safety",
    label: "Fire Safety",
  },
];

const OnSite = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const [prev, setPrev] = useState({});
  const [value, setValue] = useState([]);

  const fetchHandler = () => {
    fetchApi(setLoading, `employee/getAllOnSiteFacility`, setList);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteOnSiteFacility/${id}`);
    fetchHandler();
  };

  function MyVerticallyCenteredModal(props) {
    const [date, setDate] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");
    const [employeeSignature, setEmployeeSignature] = useState("");
    const [employeeDate, setEmployeeDate] = useState("");
    const [trainerSignature, setTrainerSignature] = useState("");
    const [trainerDate, setTrainerDate] = useState("");
    const [loading, setLoading] = useState(false);

    const payload = {
      training: [
        {
          date,
          duration,
        },
      ],
      description,
      employeeDate,
      employeeSignature,
      trainerSignature,
      trainerDate,
    };

    const submitHandler = async (e) => {
      e.preventDefault();
      await editApi(setLoading, `employee/updateOnSiteFacility/${id}`, payload);
      props.onHide();
      fetchHandler();
    };

    useEffect(() => {
      if (prev) {
        setDescription(prev?.description);
        setEmployeeDate(prev?.employeeDate);
        setEmployeeSignature(prev?.employeeSignature);
        setTrainerDate(prev?.trainerDate);
        setTrainerSignature(prev?.trainerSignature);
        setDate(prev?.training?.[0]?.date);
        setDuration(prev?.training?.[0]?.duration);
      }
    }, [prev]);

    function dateFormation(date) {
      if (date) {
        const formattedDate = new Date(date).toISOString().split("T")[0];
        return formattedDate;
      }
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={submitHandler}
            style={{ textAlign: "left", width: "100%" }}
          >
            <InputMaker
              label={"Training Date"}
              setState={setDate}
              placeholder={"Enter Date"}
              type={"date"}
              value={dateFormation(date)}
            />
            <InputMaker
              label={"Duration"}
              setState={setDuration}
              placeholder={"Enter Text"}
              type={"text"}
              value={duration}
            />
            <InputMaker
              label={"Tranner  Date"}
              setState={setTrainerDate}
              placeholder={"Enter Text"}
              type={"date"}
              value={dateFormation(trainerDate)}
            />

            <InputMaker
              label={"Description"}
              setState={setDescription}
              placeholder={"Enter Text"}
              type={"text"}
              value={description}
            />

            <div className="mb-3">
              I{" "}
              <input
                style={{
                  border: "none",
                  width: "150px",
                  outline: "none",
                  borderBottom: "1px dashed black",
                  padding: 0,
                }}
                type="text"
                placeholder=""
                value={employeeSignature}
                onChange={(e) => setEmployeeSignature(e.target.value)}
                required
              />{" "}
              attest I have recieved facility orrientation traning evident by
              the Signatures below,
            </div>
            <InputMaker
              label={"Employeer Signature / Date "}
              setState={setEmployeeDate}
              placeholder={"Enter Text"}
              type={"date"}
              value={dateFormation(employeeDate)}
            />
            <InputMaker
              label={"Trainer Signature / Creadational / Title / Date "}
              setState={setTrainerSignature}
              placeholder={"Enter Text"}
              type={"text"}
              value={trainerSignature}
            />

            <div className="employee_btn_div">
              <button className="employee_create_btn" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "Submit"}
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <>
      <MyVerticallyCenteredModal show={open} onHide={() => setOpen(false)} />
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/training")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            paddingRight: "1rem",
            padding: "20px",
          }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            ON SITE AND FACILITY ORIENTATION VERIFICATION
          </p>
          <button
            className="new_btn"
            onClick={() => navigate("/employee/training/on-site2")}
          >
            + New
          </button>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="top-div-personal">
            <Form
              style={{ width: "100%" }}
              id="form-appendix"
              className="form-personal offer-letter appendix1"
            >
              <p>
                The following orientation trainings are conducted during the 1st
                week of hire and before providing services to residents.
              </p>
              <MultiSelect
                options={options}
                setValue={setValue}
                value={value}
              />

              <p style={{ fontWeight: "500" }} className='' >
                Document more than one training date and duration of training if
                training occurs more than in one time period.
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
                    <th style={{ backgroundColor: "#D1ECF0" }}>
                      Training Date
                    </th>
                    <th style={{ backgroundColor: "#D1ECF0" }}>Duration</th>
                    <th style={{ backgroundColor: "#D1ECF0" }}>Trainer Date</th>

                    <th style={{ backgroundColor: "#D1ECF0" }}>
                      Employee Date
                    </th>
                    <th style={{ backgroundColor: "#D1ECF0" }}>
                      Employee signature
                    </th>
                    <th style={{ backgroundColor: "#D1ECF0" }}>
                      Trainer signature
                    </th>
                    <th
                      style={{
                        backgroundColor: "#D1ECF0",
                        borderRadius: "0 5px 0 0",
                      }}
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {list?.data?.data?.length > 0 &&
                    list?.data?.data?.map((item) => (
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{item.training?.[0]?.date?.slice(0, 10)}</td>
                        <td>{item.training?.[0]?.duration}</td>
                        <td> {item.trainerDate?.split("").reverse()}</td>

                        <td> {item.employeeDate?.slice(0, 10)}</td>
                        <td> {item.employeeSignature}</td>
                        <td> {item.trainerSignature}</td>
                        <td className="icon-joiner">
                          <span
                            onClick={() => {
                              setPrev(item);
                              setId(item._id);
                              setOpen(true);
                            }}
                          >
                            {" "}
                            <FaRegEdit />
                          </span>
                          <span
                            style={{
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                            }}
                            onClick={() => handleDelete(item?._id)}
                          >
                            {" "}
                            <RiDeleteBin5Fill style={{ color: "red" }} />
                            <span
                              style={{ color: "red", fontSize: "1.1.1rem" }}
                            >
                              DELETE
                            </span>
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>

              <button className="print_btn" type="button">
                PRINT REPORT
              </button>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default OnSite;
