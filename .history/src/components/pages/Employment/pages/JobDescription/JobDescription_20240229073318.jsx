/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { BorderlessInput, DefaultInput } from "../../../../../Helper/Makers";
import NavWrapper from "../../../../../Helper/NavWrapper";
import { fetchApi } from "../../../../../Repository/Apis";
import Loader from "../../../../Loader/Loader";

export const JobDescription = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getData(setProfile, "employee/getAllPatient");
    fetchApi(setLoading, "employee/getMyJobDescription", setData);
  }, []);

  console.log(profile)

  return (
    <>
      <NavWrapper title="JOB DESCRIPTION" isArrow={true} />
      {loading ? (
        <Loader />
      ) : (
        <Container className="full-width-container">
          <form className="w-100 text-start">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.data?.data?.jobDescription,
              }}
            />
            <p className="fw-bold">
              Upon a successfully hiring process, my signature below indicates
              that I understand and agree to the duties of BEHAVIORAL HEALTH
              TECHNICIAN(BHT), and I have meet the stated qualifications,
              experience requirements, and can adequately perform duties
              prescribed or as stated in this job descriptions.
            </p>
            <div className="grid-container mb-3">
              <div className="grid-item long-input">
                <label>Employee Name:</label>
                <DefaultInput
                  setState={setMedicationAndStrength}
                  placeholder=""
                  type={"text"}
                  value={''}
                />
              </div>
            </div>
          </form>
        </Container>
      )}
    </>
  );
};
