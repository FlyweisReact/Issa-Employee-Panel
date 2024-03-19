/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  DateFormatter,
  DefaultInput,
} from "../../../Helper/Makers";
import { useParams } from "react-router-dom";

const ViewFinancialRecord = () => {
  const { id } = useParams();
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [dateOfBirth, setDOB] = useState("");
  const [admitDate, setAdminDate] = useState("");
  const [transDate, setTransDate] = useState("");
  const [deposit, setDeposti] = useState("");
  const [moneySpent, setMoneySpent] = useState("");
  const [balance, setBalance] = useState("");
  const [description, setDescription] = useState("");
  const [residentSignature, setResidentSignature] = useState("");
  const [staffSignature, setStaffSignature] = useState("");
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [residentSignDate, setResidentSignDate] = useState("");
  const [residentSignTime, setResidentSignTime] = useState("");
  const [staffSignDate, setStaffSignDate] = useState("");
  const [staffSignTime, setStaffSignTime] = useState("");
  const [details, setDetails] = useState({});

  const arrObj = {
    date: transDate,
    deposit,
    moneySpent,
    balance,
    description,
    residentSignature,
    staffSignature,
    residentSignDate,
    residentSignTime,
    staffSignDate,
    staffSignTime,
  };

  const payload = {
    patientId,
    residentName,
    dateOfBirth,
    admitDate,
    transactions: arr?.map((i) => ({
      date: i.date,
      deposit: i.deposit,
      moneySpent: i.moneySpent,
      balance: i.balance,
      description: i.description,
      residentSignature: i.residentSignature,
      residentSignTime: i.residentSignTime,
      residentSignDate: i.residentSignDate,
      StaffSignDate: i.staffSignDate,
      StaffSignTime: i.staffSignTime,
      staffSignature: i.staffSignature,
    })),
  };

  const transaction_adder = () => {
    setArr((prev) => [...prev, arrObj]);
    setTransDate("");
    setDeposti("");
    setMoneySpent("");
    setBalance("");
    setDescription("");
    setResidentSignature("");
    setStaffSignature("");
  };

  const transaction_remover = (index) => {
    setArr((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const patientHandler = (i) => {
    const obj = JSON.parse(i);
    setPatientId(obj?._id);
    setResidentName(obj?.fullName);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await editApi(
      setLoading,
      `employee/editFinancialTransactionsRecordById/${id}`,
      payload
    );
    setArr([]);
    setDOB("");
    setAdminDate("");
    fetchHandler();
  };

  const fetchHandler = () => {
    getData(setDetails, `employee/getFinancialTransactionsRecordById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (details) {
      const item = details?.data;
      setPatientId(item?.patientId);
      setResidentName(item?.residentName);
      setAdminDate(item?.admitDate);
      setDOB(item?.dateOfBirth);
      if (item?.transactions) {
        const uniqueMoods = new Set([...arr, ...item?.transactions]);
        const uniqueMoodArray = Array.from(uniqueMoods)?.map((i) => ({
          date: i.date?.slice(0, 10),
          deposit: i.deposit,
          moneySpent: i.moneySpent,
          balance: i.balance,
          description: i.description,
          residentSignature: i.residentSignature,
          staffSignature: i.staffSignature,
        }));
        setArr(uniqueMoodArray);
      }
    }
  }, [details]);

  console.log(details);

  return (
    <>
      <NavWrapper title={"FINANCIAL TRANSICTIONS RECORD"} isArrow={true} />

      <Container className="full-width-container">
        <form className="text-start w-100" onSubmit={submitHandler}>
          <div className="grid-container">
            <div className="grid-item">
              <label>Resident Name:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.residentName}
              />
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <label>DOB:</label>
              <DefaultInput
                isBots={false}
                value={DateInMMDDYY(details?.data?.dateOfBirth)}
              />
            </div>
            <div className="grid-item">
              <label>Admit Date:</label>

              <DefaultInput
                isBots={false}
                value={DateInMMDDYY(details?.data?.admitDate)}
              />
            </div>
          </div>

          {details?.data?.?.length > 0 && (
            <div className="overflow_table mt-3">
              <table className="mb-3 color-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Deposit</th>
                    <th>Money Spent</th>
                    <th> Balance </th>
                    <th> Description of items spent </th>
                    <th> Resident Signature </th>
                    <th> Staff Signature </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {arr?.map((i, index) => (
                    <tr key={index}>
                      <td> {i?.date && DateInMMDDYY(i?.date)} </td>
                      <td> {i?.deposit} </td>
                      <td> {i?.moneySpent} </td>
                      <td> {i?.balance} </td>
                      <td> {i?.description} </td>
                      <td> {i?.residentSignature} </td>
                      <td> {i?.staffSignature} </td>
                      <td>
                        {" "}
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => transaction_remover(index)}
                        />{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <button className="employee_create_btn">
            {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
          </button>
        </form>
      </Container>
    </>
  );
};

export default HOC(ViewFinancialRecord);
