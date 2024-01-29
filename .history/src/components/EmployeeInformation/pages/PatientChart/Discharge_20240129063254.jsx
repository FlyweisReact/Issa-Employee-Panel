/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData } from "../../../api/api.js";
import { Modal } from "react-bootstrap";

import { getData } from "../../../api/api";
const Discharge = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  const deleteHandler = (id) => {
    deleteData(
      "employee/deleteDischargeSummary",
      id,
      getData(setData, "employee/getAllDischargeSummary")
    );
  };

  useEffect(() => {
    getData(setData, "employee/getAllDischargeSummary");
  }, []);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal show={open} onHide={() => setOpen(false)} />
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
          <p style={{ fontWeight: "bold", flex: "1" }}>DISCHARGE SUMMARY</p>
          <p>
            <Button
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                backgroundColor: "#1A9FB2",
                padding: ".5rem 1.5rem",
                border: "none",
              }}
              onClick={() => navigate("/employee/patient-chart/discharge2")}
            >
              + NEW
            </Button>
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
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
                <th style={{ backgroundColor: "#D1ECF0" }}>Resident’s Name </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Date of Admission
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Date of Discharge
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Reason for Discharge
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Treatment Provided
                </th>

                <th style={{ backgroundColor: "#D1ECF0" }}></th>
                <th
                  style={{
                    backgroundColor: "#D1ECF0",
                    borderRadius: "0 5px 0 0",
                  }}
                ></th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.length > 0 &&
                data?.data?.map((item) => {
                  return (
                    <tr key={item?._id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{item?.clientName}</td>
                      <td>{item?.dateOfAdmission?.split("T")[0]}</td>{" "}
                      <td>{item?.dateOfDischarge?.split("T")[0]}</td>
                      <td>{item?.reasonForDischarge}</td>
                      <td>{item?.treatmentProvided}</td>
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
                        <span onClick={() => {
                          setId()
                          setOpen(true)}}>
                          {" "}
                          <FaRegEdit />
                        </span>
                        <span
                          onClick={() => {
                            deleteHandler(item?._id);
                            console.log("id");
                          }}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <RiDeleteBin5Fill style={{ color: "red" }} />
                          <span style={{ color: "red", fontSize: "1.1.1rem" }}>
                            DELETE
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <span></span> */}
            <span>
              <Button
                type="submit"
                style={{
                  fontSize: ".9rem",
                  fontWeight: "bold",
                  backgroundColor: "#1A9FB2",
                  padding: ".5rem 1.5rem",
                  border: "none",
                }}
              >
                SAVE
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discharge;
