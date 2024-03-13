/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteApi, editApi, fetchApi } from "../../../Repository/Apis.js";
import Loader from "../../../components/Loader/Loader.js";
import Select from "react-select";
import { ClipLoader } from "react-spinners";
import HOC from "../../../Layout/Inner/HOC.js";
import CreateNav from "../../../Helper/CreateNav.js";
import { BorderlessInput } from "../../../Helper/Makers.js";

const ServiceLog = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [prevData, setPrevData] = useState({});

  const fetchHandler = () => {
    const url = "employee/getAllEmployeeInServiceLog";
    fetchApi(setLoading, url, setData);
  };

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteEmployeeInServiceLog/${id}`);
    fetchHandler();
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  console.log(data);

  function MyVerticallyCenteredModal(props) {
    const [employeeName, setEmployeeName] = useState("");
    const [dateOfTraining, setDateOfTraining] = useState("");
    const [trainingSubject, setTrainingSubject] = useState([]);
    const [administratorSignature, setAdministratorSignature] = useState([]);
    const [hoursOrUnits, setHoursOrUnits] = useState("");
    const [employeeSignature, setEmployeeSignature] = useState("");
    const [loading, setLoading] = useState(false);

    let payload;
    payload = {
      employeeName,
      dateOfTraining,
      trainingSubject: trainingSubject?.map((i) => i.value),
      administratorSignature: administratorSignature?.value,
      hoursOrUnits,
      employeeSignature,
    };
    if (!trainingSubject || trainingSubject.length === 0) {
      delete payload.trainingSubject;
    }
    if (!setAdministratorSignature || setAdministratorSignature.length === 0) {
      delete payload.administratorSignature;
    }

    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        await editApi(
          setLoading,
          `employee/updateEmployeeInServiceLog/${id}`,
          payload
        );
        props.onHide();
        fetchHandler();
      } catch (e) {
        console.log(e);
      }
    };

    const options = [
      { value: "Infectious Control", label: "Infectious Control" },
      {
        value: "Fall prevention and fall recovery",
        label: "Fall prevention and fall recovery",
      },
    ];
    const option2 = [
      { value: "Administrator", label: "Administrator" },
      { value: "BHP", label: "BHP" },
      { value: "Registered Nures", label: " Registered Nures" },
    ];

    useEffect(() => {
      if (prevData) {
        setAdministratorSignature(prevData?.administratorSignature);
        setDateOfTraining(prevData?.dateOfTraining);
        setHoursOrUnits(prevData?.hoursOrUnits);
        setHoursOrUnits(prevData?.hoursOrUnits);
        setEmployeeSignature(prevData?.employeeSignature);
        setEmployeeName(prevData?.employeeName);
      }
    }, [prevData]);

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
            style={{ textAlign: "left", width: "100%" }}
            onSubmit={submitHandler}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                name="text"
                onChange={(e) => setEmployeeName(e.target.value)}
                value={employeeName}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date of Training </Form.Label>
              <Form.Control
                name="date"
                onChange={(e) => setDateOfTraining(e.target.value)}
                value={dateFormation(dateOfTraining)}
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Training Subject </Form.Label>
              <Select
                isMulti
                options={options}
                onChange={(e) => setTrainingSubject(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Hours of Unit</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setHoursOrUnits(e.target.value)}
                value={hoursOrUnits}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Administrator Signature </Form.Label>

              <Select
                options={option2}
                onChange={(e) => setAdministratorSignature(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Employee Signature</Form.Label>
              <Form.Control
                name="trainerSignature"
                onChange={(e) => setEmployeeSignature(e.target.value)}
                type="text"
                value={employeeSignature}
              />
            </Form.Group>

            <div className="employee_btn_div">
              <button className="employee_create_btn" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const [employeeName, setEmployeeName] = useState("");
  const [date, setDate] = useState("");
  return (
    <>
      {" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <CreateNav
        title={"EMPLOYEE IN-SERVICE LOG"}
        link={"/create-service-log"}
      />
      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className="grid-container mb-3">
              <div className="grid-item">
                <label>Employee Name:</label>
                <BorderlessInput
                  setState={setEmployeeName}
                  value={employeeName}
                  type="text"
                />
              </div>
              <div className="grid-item long-input" />
              <div className="grid-item">
                <BorderlessInput setState={setDate} value={date} type="date" />
              </div>
            </div>
            <div className="overflow-table">
              <table className="colored_table">
                <thead>
                  <tr>
                    <th>Date of In-Service Training</th>
                    <th> Subject</th>
                    <th>Number of Hours or Units</th>
                    <th>Administrator/ BHP/Registered Nures Signature</th>
                    <th>Employee’s Signature</th>
                    <th></th>{" "}
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.data?.map((data) => (
                    <tr key={data?._id}>
                      <td>
                        {data?.dateOfTraining
                          .split("T")[0]
                          .split("-")
                          .reverse()
                          .join("-")}
                      </td>
                      <td>
                        {data?.trainingSubject?.map((subject, index) => (
                          <span key={index}>{subject}</span>
                        ))}
                      </td>
                      <td>{data?.hoursOrUnits}</td>
                      <td>{data?.administratorSignature}</td>
                      <td>{data?.employeeSignature}</td>
                      <td className="icon-joiner">
                      <div className="icon-joiner"></div>
                        <span
                          onClick={() => {
                            setPrevData(data);
                            setId(data?._id);
                            setModalShow(true);
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
                          onClick={() => handleDelete(data?._id)}
                        >
                          {" "}
                          <RiDeleteBin5Fill style={{ color: "red" }} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="btn" className="print_btn">
              PRINT REPORT
            </button>
          </div>
        )}
      </Container>
    </>
  );
};

export default HOC(ServiceLog);
