/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { DefaultInput } from "../../../Helper/Makers";
import { DateInMMDDYY } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { useParams } from "react-router-dom";

const ViewContactNote = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const fetchDetail = () => {
    getData(setDetails, `employee/getContactNoteById/${id}`);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint2 = () => {
    downloadReport(handlePrint);
  };


  return (
    <>
      <NavWrapper title={"Contact Note"} isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <div className="grid-container">
            <div className="grid-item">
              <label>Resident’s Name:</label>
              <DefaultInput
                value={details?.data?.patientId?.fullName}
                isBots={false}
              />
            </div>
            <div className="grid-item third-wid-input" />
            <div className="grid-item full-wid-input">
              <label>Person contacted:</label>
            </div>
            <div className="grid-item">
              <label>Guardian</label>
              <DefaultInput value={details?.data?.guardian} isBots={false} />
            </div>

            <div className="grid-item">
              <label>Case Manager</label>
              <DefaultInput value={details?.data?.caseManager} isBots={false} />
            </div>

            <div className="grid-item">
              <label>Pharmacy</label>
              <DefaultInput value={details?.data?.pharmacy} isBots={false} />
            </div>

            <div className="grid-item">
              <label>Family member</label>
              <DefaultInput
                value={details?.data?.familyMember}
                isBots={false}
              />
            </div>

            <div className="grid-item">
              <label>Doctors office</label>
              <DefaultInput
                value={details?.data?.doctorsOffice}
                isBots={false}
              />
            </div>

            <div className="grid-item long-input">
              <label>Other</label>
              <DefaultInput
                value={details?.data?.personContactedOther}
                isBots={false}
              />
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <label>Contact Name</label>
              <DefaultInput value={details?.data?.contactName} isBots={false} />
            </div>

            <div className="grid-item full-wid-input">
              <label>Mode of contact:</label>
            </div>
            <div className="grid-item">
              <label>Email</label>
              <DefaultInput value={details?.data?.email} isBots={false} />
            </div>

            <div className="grid-item">
              <label>Text message</label>
              <DefaultInput value={details?.data?.textMessage} isBots={false} />
            </div>

            <div className="grid-item">
              <label>Phone call</label>
              <DefaultInput value={details?.data?.phoneCall} isBots={false} />
            </div>

            <div className="grid-item">
              <label>In person</label>
              <DefaultInput value={details?.data?.inPerson} isBots={false} />
            </div>
            <div className="grid-item full-wid-input">
              <label>Other, please specify</label>
              <DefaultInput
                value={details?.data?.modeOfContactOther}
                isBots={false}
              />
            </div>

            <div className="grid-item full-wid-input">
              <DefaultInput
                value={details?.data?.contactSummaryNote}
                isBots={false}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Emergency issue</label>
              <DefaultInput
                value={details?.data?.emergencyIssue ? "Yes" : "No"}
                isBots={false}
              />
            </div>

            <div className="grid-item  full-wid-input d-block">
              <label>
                Digitally sign by{" "}
                {details?.data?.savedSigned && (
                  <p>
                    Digitally Sign by {details?.data?.savedSigned}{" "}
                    {details?.data?.savedDate &&
                      DateInMMDDYY(details?.data?.savedDate)}{" "}
                    {details?.data?.savedTime}{" "}
                  </p>
                )}
              </label>
            </div>
          </div>
          <button
            className="print_btn hidePrint"
            type="button"
            onClick={handlePrint2}
          >
            PRINT REPORT
          </button>
        </form>
      </Container>
    </>
  );
};

export default HOC(ViewContactNote);
