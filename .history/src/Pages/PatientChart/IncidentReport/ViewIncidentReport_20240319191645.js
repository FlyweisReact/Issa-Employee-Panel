/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import {
  BorderlessInput,
  BorderlessSelect,
  CheckBoxMaker,
  DateFormatter,
  DefaultInput,
  MultiSelect,
  TextareaMaker,
} from "../../../Helper/Makers";
import {
  incidentOptions,
  levelSeverityOptions,
} from "../../../Constant/Constant";
import { SignatureModal } from "../../../Mod/Modal";
import { DateInMMDDYY, fetchApi, postApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { useParams } from "react-router-dom";

const ViewIncidentReport = () => {

  const [details, setDetails] = useState({});
  const { id } = useParams();



  const fetchHandler = () => {
    fetchApi(setLoading, `employee/getIncidentReportById/${id}`, setDetails);
  };


  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
 
      <NavWrapper title={"INCIDENT REPORT"} isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <p
            className="fw-bold text-desc"
            style={{ color: "red", textDecoration: "underline" }}
          >
            {" "}
            Part I – Description of Incident
          </p>

          <div className="grid-container">
            <div className="grid-item">
              <label>Resident’s Name:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.patientId?.fullName}
              />
            </div>
            <div className="grid-item " />
            <div className="grid-item">
              <label>Date of Incident:</label>
              <DefaultInput
                isBots={false}
                value={DateInMMDDYY(details?.data?.data?.dateOfIncident)}
              />
            </div>

            <div className="grid-item">
              <label>Time:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.timeOfIncident}
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Name of Employee/s Involved:</label>
              {details?.data?.data?.employeesInvolved?.map((i, index) => (
                <DefaultInput
                  isBots={false}
                  value={i.fullName}
                  key={`employeeinvoled${index}`}
                />
              ))}
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Name Resident/s Involved:</label>
              {details?.data?.data?.residentsInvolved?.map((i, index) => (
                <DefaultInput
                  isBots={false}
                  value={i.fullName}
                  key={`employeeinvoled${index}`}
                />
              ))}
            </div>

            <div className="grid-item full-wid-input">
              <label>Name/Title of Person Observing/Reporting Incident:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.personObservingReporting}
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>INCIDENTS:</label>
              {details?.data?.data?.incidents?.map((i, index) => (
                <DefaultInput
                  isBots={false}
                  value={i}
                  key={`incidents${index}`}
                />
              ))}
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>LEVEL OF SEVERITY:</label>
              {details?.data?.data?.levelOfSeverity?.map((i, index) => (
                <DefaultInput
                  isBots={false}
                  value={i}
                  key={`levelOfSeverity${index}`}
                />
              ))}
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>
                Describe the event in detail: What happened before, during, and
                after the incident
              </label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.eventDetails}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>MEDICATION ERRORS:</label>
            </div>

            <div className="grid-item">
              <label>Missed Dose</label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data?.medicationErrorsMissedDose ? "Yes" : "No"
                }
              />
            </div>
            <div className="grid-item">
              <label>Refused Medication</label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data?.medicationErrorsWrongClient
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="grid-item">
              <label>Wrong Client </label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data?.medicationErrorsWrongClient
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="grid-item">
              <label>Wrong Time</label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data?.medicationErrorsWrongTime ? "Yes" : "No"
                }
              />
            </div>
            <div className="grid-item">
              <label>Wrong Med </label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data?.medicationErrorsWrongMed ? "Yes" : "No"
                }
              />
            </div>
            <div className="grid-item">
              <label>None </label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.medicationErrorsNone ? "Yes" : "No"}
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Action/s taken: (Check all that apply):</label>
            </div>

            <div className="grid-item">
              <label> Sent to ER/Hospital</label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data?.actionsTakenSenttoERHospital
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="grid-item">
              <label>First Aid </label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.actionsTakenFirstAid ? "Yes" : "No"}
              />
            </div>
            <div className="grid-item">
              <label>No Medical Care Required </label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data?.actionsTakenNoMedicalCareRequired
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="grid-item">
              <label> Care Refused</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.careRefused ? "Yes" : "No"}
              />
            </div>
            <div className="grid-item">
              <label> Fire Department Called</label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data?.actionsTakenFireDepartmentCalled
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="grid-item">
              <label> Police Called</label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data?.actionsTakenPoliceCalled ? "Yes" : "No"
                }
              />
            </div>
            <div className="grid-item long-input">
              <label>Referred to Administrator/Risk Management</label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data
                    ?.actionsTakenReferredtoAdministratorRiskManagement
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="grid-item long-input">
              <label> Maintenance Called/Work Order Completed</label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data
                    ?.actionsTakenMaintenanceCalledWorkOrderCompleted
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="grid-item">
              <label>Other </label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.actionsTakenOther ? "Yes" : "No"}
              />
            </div>

            <div className="grid-item">
              <label>Other </label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.actionsTakenOtherComment}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>If Abuse/Neglect Involved, State Contacted:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.abuseNeglectInvolved ? "Yes" : "No"}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>If No, Explain:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.abuseNeglectInvolvedifYes}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Notifications:</label>
            </div>
            <div className="grid-item">
              <label>Family:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.notificationsFamily ? "Yes" : "No"}
              />
            </div>
            <div className="grid-item">
              <label>Guardian:</label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data?.notificationsGuardian ? "Yes" : "No"
                }
              />
            </div>
            <div className="grid-item">
              <label>Case Manage:</label>
              <DefaultInput
                isBots={false}
                value={
                  details?.data?.data?.notificationsCaseManager ? "Yes" : "No"
                }
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Time of Notification:</label>
            </div>

            <div className="grid-item full-wid-input">
              <label> Mode of communication:</label>
            </div>

            <div className="grid-item">
              <label>Email:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.modeEmail ? "Yes" : "No"}
              />
            </div>
            <div className="grid-item">
              <label>Phone Call:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.modePhoneCall ? "Yes" : "No"}
              />
            </div>
            <div className="grid-item">
              <label>In Person:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.modeInPerson ? "Yes" : "No"}
              />
            </div>
            <div className="grid-item">
              <label>Other:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.modeOther ? "Yes" : "No"}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Report Completed By:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.data?.reportCompletedBy}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>
                INCIDENT REPORTS ARE TO BE COMPLETED AND FORWARDED WITHIN 24
                HOURS OF INCIDENT TO ADMINISTRATOR
              </label>
            </div>

            <div className="grid-item full-wid-input ">
              <label>
                {details?.data?.data?.savedSignedPartA && (
                  <p>
                    Digitally Sign by {details?.data?.data?.savedSignedPartA}{" "}
                    {details?.data?.data?.signedDate &&
                      DateInMMDDYY(details?.data?.data?.signedDate)}{" "}
                    {details?.data?.data?.signedTime}{" "}
                  </p>
                )}
              </label>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC(ViewIncidentReport);
