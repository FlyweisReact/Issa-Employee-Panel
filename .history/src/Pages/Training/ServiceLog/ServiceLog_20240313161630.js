/** @format */

import React, { useEffect, useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";
import {
  DateInMMDDYY,
  deleteApi,
  editApi,
  fetchApi,
} from "../../../Repository/Apis.js";
import Loader from "../../../components/Loader/Loader.js";
import Select from "react-select";
import { ClipLoader } from "react-spinners";
import HOC from "../../../Layout/Inner/HOC.js";
import CreateNav from "../../../Helper/CreateNav.js";
import { BorderlessInput } from "../../../Helper/Makers.js";
import { Link } from "react-router-dom";

const ServiceLog = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [prevData, setPrevData] = useState({});
  const [query, setQuery] = useState("");

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

  const filteredData = !query
    ? data?.data?.data
    : data?.data?.data?.filter((i) =>
        i?.employeeName?.toLowerCase().includes(query?.toLowerCase())
      );

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
                  setState={setQuery}
                  value={query}
                  type="text"
                />
              </div>
            </div>
            <div className="overflow-table">
              <table className="colored_table">
                <thead>
                  <tr>
                    <th>Date of In-Service Training</th>
                    <th>Employee Name</th>
                    <th> Subject</th>
                    <th>Number of Hours or Units</th>
                    <th>Administrator/ BHP/Registered Nures Signature</th>
                    <th>Employee’s Signature</th>
                    <th></th>{" "}
                  </tr>
                </thead>
                <tbody>
                  {filteredData?.map((data) => (
                    <tr key={data?._id}>
                      <td>{DateInMMDDYY(data?.dateOfTraining)}</td>
                      <td> {data?.employeeName} </td>
                      <td>
                        {data?.trainingSubject?.map((subject, index) => (
                          <span key={index}>{subject}</span>
                        ))}
                      </td>
                      <td>{data?.hoursOrUnits}</td>
                      <td>{data?.administratorSignature}</td>
                      <td>{data?.employeeSignature}</td>
                      <td className="icon-joiner">
                        <div className="icon-joiner">
                        <Link to={`/edit-service-log/${data?._id}`}>
                          
                        </Link>
                          <i
                            className="fa-solid fa-edit"
                          
                          />
                          <i
                            className="fa-solid fa-edit"
                            onClick={() => {
                              setPrevData(data);
                              setId(data?._id);
                              setModalShow(true);
                            }}
                          />
                          <i
                            className="fa-regular fa-trash-can"
                            onClick={() => handleDelete(data?._id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default HOC(ServiceLog);
