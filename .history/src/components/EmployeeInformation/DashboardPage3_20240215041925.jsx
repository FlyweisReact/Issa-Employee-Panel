/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { showMsg } from "../../Baseurl";
import { BorderlessInput, DefaultInput, RadioMaker } from "../../Helper/Makers";
import NavWrapper from "../../Helper/NavWrapper";

const DashboardPage3 = () => {
  const navigate = useNavigate();
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [supervisorNameAndTitle, setSupervisorNameAndTitle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [dutiesPerformed, setDutiesPerformed] = useState("");
  const [reasonForLeaving, setReasonForLeaving] = useState("");
  const [mayContactWithEmployee, setMayContactWithEmployee] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});
  const [arr, setArr] = useState([]);

  const payload = {
    streetAddress,
    city,
    state,
    zipCode,
    phoneNumber,
    supervisorNameAndTitle,
    employeeName,
    from: start,
    to: end,
    previousCompany: {
      from,
      to,
      jobTitle,
      dutiesPerformed,
      reasonForLeaving,
      mayContactWithEmployee,
    },
  };

  const Auth = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.React_App_Baseurl}employee/addEmployeeHistory`,
        payload,
        Auth
      );
      const msg = res.data.message;
      showMsg("", msg, "success");
      setLoading(false);
      navigate("/employee/dashboard/page-4");
    } catch (e) {
      setLoading(false);
      const msg = e?.response?.data?.message;
      showMsg("Error ||", msg, "danger");
    }
  };

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/viewEmployeeHistory`,
        Auth
      );
      const data = res.data.data;
      setDetail(data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (detail) {
      setStreetAddress(detail?.streetAddress);
      setCity(detail?.city);
      setState(detail?.state);
      setZipCode(detail?.zipCode);
      setPhoneNumber(detail?.phoneNumber);
      setSupervisorNameAndTitle(detail?.supervisorNameAndTitle);
      setJobTitle(detail?.previousCompany?.[0]?.jobTitle);
      setDutiesPerformed(detail?.previousCompany?.[0]?.dutiesPerformed);
      setReasonForLeaving(detail?.previousCompany?.[0]?.reasonForLeaving);
      setMayContactWithEmployee(
        detail?.previousCompany?.[0]?.mayContactWithEmployee
      );
      setEmployeeName(detail?.employeeName);
      setStart(detail?.from);
      setEnd(detail?.to);
      setTo(detail?.previousCompany?.[0]?.to);
      setFrom(detail?.previousCompany?.[0]?.from);
    }
  }, [detail]);

  function dateFormation(date) {
    if (date) {
      const formattedDate = new Date(date).toISOString().split("T")[0];
      return formattedDate;
    }
  }

  const addMore = () => {
    setArr((prev) => [...prev, payload]);
  };
  const removeOne = (index) => {
    setArr((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <NavWrapper
        title={"EMPLOYMENT HISTORY"}
        isArrow={true}
        filled={3}
        empty={2}
      />

      <Container className="full-width-container">
        <div className="top-div-personal2">
          <Form className="employee1" onSubmit={submitHandler}>
            <p style={{ fontWeight: "500" }} className='' >
              Please list your work experience in the past five (5) years,
              beginning with the most recent job held. If you were
              self-employed, give firm name. Attach additional sheets if
              necessary. Please do not write “see resume”.
            </p>

            <div className="wraaped_div mb-3">
              <div className="Main half-width">
                <span className="label">Employer Name:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setEmployeeName}
                    placeholder={""}
                    type={"text"}
                    value={employeeName}
                  />
                </span>
              </div>
              <div className="Main half-width">
                <span className="label">Street Address:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setStreetAddress}
                    placeholder={""}
                    type={"text"}
                    value={streetAddress}
                  />
                </span>
              </div>
            </div>

            <div className="wraaped_div mb-3">
              <div className="Main half-width">
                <span className="label">City:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setCity}
                    placeholder={""}
                    type={"text"}
                    value={city}
                  />
                </span>
              </div>
              <div className="Main half-width">
                <span className="label">State:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setState}
                    placeholder={""}
                    type={"text"}
                    value={state}
                  />
                </span>
              </div>

              <div className="Main half-width">
                <span className="label">ZipCode:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setZipCode}
                    placeholder={""}
                    type={"text"}
                    value={zipCode}
                  />
                </span>
              </div>

              <div className="Main half-width">
                <span className="label">Phone Number:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setPhoneNumber}
                    placeholder={""}
                    type={"text"}
                    value={phoneNumber}
                  />
                </span>
              </div>
            </div>

            <div className="boxes_inputs mb-3">
              <div className="Main">
                <p>Supervisor Name and Title:</p>
                <BorderlessInput
                  setState={setSupervisorNameAndTitle}
                  placeholder={""}
                  type={"text"}
                  value={supervisorNameAndTitle}
                />
              </div>
              <div className="Main">
                <p>Employment Date:</p>
                <div>
                  <span className="label">From:</span>
                  <span className="Input_span">
                    <BorderlessInput
                      setState={setFrom}
                      placeholder={""}
                      type={"date"}
                      value={dateFormation(from)}
                    />
                  </span>
                </div>
                <div>
                  <span className="label">To:</span>
                  <span className="Input_span">
                    <BorderlessInput
                      setState={setTo}
                      placeholder={""}
                      type={"date"}
                      value={dateFormation(to)}
                    />
                  </span>
                </div>
              </div>
              <div className="Main">
                <p>Salary:</p>
                <div>
                  <span className="label">Start:</span>
                  <span className="Input_span">
                    <BorderlessInput
                      setState={setStart}
                      placeholder={""}
                      type={"date"}
                      value={dateFormation(start)}
                    />
                  </span>
                </div>
                <div>
                  <span className="label">End:</span>
                  <span className="Input_span">
                    <BorderlessInput
                      setState={setEnd}
                      placeholder={""}
                      type={"date"}
                      value={dateFormation(end)}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="wraaped_div mb-3">
              <div className="Main half-width">
                <span className="label">Your Job Title(s):</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setJobTitle}
                    placeholder={""}
                    type={"text"}
                    value={jobTitle}
                  />
                </span>
              </div>
              <div className="Main half-width">
                <span className="label">
                  Duties performed and advancements or promotions earned while
                  with this employer:
                </span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setDutiesPerformed}
                    placeholder={""}
                    type={"text"}
                    value={dutiesPerformed}
                  />
                </span>
              </div>
            </div>

            <div className="wraaped_div mb-3">
              <div className="Main half-width">
                <span className="label">Reason(s) for leaving:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setReasonForLeaving}
                    placeholder={""}
                    type={"text"}
                    value={reasonForLeaving}
                  />
                </span>
              </div>
              <div className="Main half-width">
                <span className="label">May we contact this employer?</span>
                <span className="Input_span Radio_btns">
                  <div className="btns">
                    <RadioMaker
                      name={"contactEmployer"}
                      setValue={setMayContactWithEmployee}
                      value={true}
                      id={"contactEmployer1"}
                      label={"Yes"}
                      checked={mayContactWithEmployee}
                    />
                    <RadioMaker
                      name={"contactEmployer"}
                      setValue={setMayContactWithEmployee}
                      value={false}
                      id={"contactEmployer2"}
                      label={"No"}
                      checked={mayContactWithEmployee}
                    />
                  </div>
                </span>
              </div>
            </div>

            <button
              className="add_more"
              type="button"
              onClick={() => addMore()}
            >
              Add More Experience
            </button>

            {arr?.map((i, index) => (
              <div key={index}>
                <div className="wraaped_div mb-3 mt-4">
                  <div className="Main half-width">
                    <span className="label">Employer Name:</span>
                    <span className="Input_span">
                      <DefaultInput value={i.employeeName} />
                    </span>
                  </div>
                  <div className="Main half-width">
                    <span className="label">Street Address:</span>
                    <span className="Input_span">
                      <DefaultInput value={i.streetAddress} />
                    </span>
                  </div>
                </div>

                <div className="wraaped_div mb-3">
                  <div className="Main half-width">
                    <span className="label">City:</span>
                    <span className="Input_span">
                      <DefaultInput value={i.city} />
                    </span>
                  </div>
                  <div className="Main half-width">
                    <span className="label">State:</span>
                    <span className="Input_span">
                      <DefaultInput value={i.state} />
                    </span>
                  </div>

                  <div className="Main half-width">
                    <span className="label">ZipCode:</span>
                    <span className="Input_span">
                      <DefaultInput value={i.zipCode} />
                    </span>
                  </div>

                  <div className="Main half-width">
                    <span className="label">Phone Number:</span>
                    <span className="Input_span">
                      <DefaultInput value={i.phoneNumber} />
                    </span>
                  </div>
                </div>

                <div className="boxes_inputs mb-3">
                  <div className="Main">
                    <p>Supervisor Name and Title:</p>
                    <DefaultInput value={i.supervisorNameAndTitle} />
                  </div>
                  <div className="Main">
                    <p>Employment Date:</p>
                    <div>
                      <span className="label">From:</span>
                      <span className="Input_span">
                        <DefaultInput
                          value={dateFormation(i?.previousCompany?.from)}
                        />
                      </span>
                    </div>
                    <div>
                      <span className="label">To:</span>
                      <span className="Input_span">
                        <DefaultInput
                          value={dateFormation(i?.previousCompany?.to)}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="Main">
                    <p>Salary:</p>
                    <div>
                      <span className="label">Start:</span>
                      <span className="Input_span">
                        <DefaultInput value={dateFormation(i.from)} />
                      </span>
                    </div>
                    <div>
                      <span className="label">End:</span>
                      <span className="Input_span">
                        <DefaultInput value={dateFormation(i.to)} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="wraaped_div mb-3">
                  <div className="Main half-width">
                    <span className="label">Your Job Title(s):</span>
                    <span className="Input_span">
                      <DefaultInput value={i?.previousCompany?.jobTitle} />
                    </span>
                  </div>
                  <div className="Main half-width">
                    <span className="label">
                      Duties performed and advancements or promotions earned
                      while with this employer:
                    </span>
                    <span className="Input_span">
                      <DefaultInput
                        value={i?.previousCompany?.dutiesPerformed}
                      />
                    </span>
                  </div>
                </div>

                <div className="wraaped_div mb-3">
                  <div className="Main half-width">
                    <span className="label">Reason(s) for leaving:</span>
                    <span className="Input_span">
                      <DefaultInput
                        value={i?.previousCompany?.reasonForLeaving}
                      />
                    </span>
                  </div>
                  <div className="Main half-width">
                    <span className="label">May we contact this employer?</span>
                    <span className="Input_span">
                      <DefaultInput
                        value={
                          i?.previousCompany?.mayContactWithEmployee === true
                            ? "Yes"
                            : "No"
                        }
                      />
                    </span>
                  </div>
                </div>

                <button
                  className="remove_this"
                  type="button"
                  onClick={() => removeOne(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="employee_btn_div">
              <button className="employee_create_btn" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "NEXT"}
              </button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default DashboardPage3;
