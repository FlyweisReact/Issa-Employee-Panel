/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { DefaultInput } from "../../../Helper/Makers";
import { DateInMMDDYY, downloadReport } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const ViewAuthorization = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const fetchHandler = () => {
    getData(
      setDetail,
      `employee/getAuthorizationForReleaseOfInformationById/${id}`
    );
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint2 = () => {
    downloadReport(handlePrint);
  };

  return (
    <>
      <div ref={componentRef}>
        <NavWrapper
          title={"AUTHORIZATION FOR RELEASE OF INFORMATION"}
          isArrow={true}
        />

        <Container className="full-width-container">
          <form className="w-100 text-start">
            <div className="grid-container">
              <div className="grid-item long-input">
                <label>Resident’s Name:</label>
                <DefaultInput
                  isBots={false}
                  value={detail?.data?.residentName}
                />
              </div>
              <div className="grid-item" />
              <div className="grid-item">
                <label>Date of Birth :</label>
                <DefaultInput
                  isBots={false}
                  value={DateInMMDDYY(detail?.data?.dateOfBirth)}
                />
              </div>
              <div className="grid-item full-wid-input">
                <div className="mixed_input">
                  <label>Authorize</label>
                  <span>
                    <DefaultInput
                      isBots={false}
                      value={detail?.data?.authorizedPersonName}
                    />
                  </span>
                  <label> to release the information described below to:</label>{" "}
                </div>
              </div>
              <div className="grid-item full-wid-input">
                <label>Person and Agency (recipient)</label>
              </div>
              <div className="grid-item full-wid-input">
                <label>Address:</label>
                <DefaultInput
                  isBots={false}
                  value={detail?.data?.authorizedPersonAddress}
                />
              </div>
              <div className="grid-item">
                <label>Phone:</label>
                <DefaultInput
                  isBots={false}
                  value={detail?.data?.authorizedPersonPhone}
                />
              </div>

              <div className="grid-item">
                <label>Fax:</label>
                <DefaultInput
                  isBots={false}
                  value={detail?.data?.authorizedPersonFax}
                />
              </div>

              <div className="grid-item">
                <label>Email:</label>
                <DefaultInput
                  isBots={false}
                  value={detail?.data?.authorizedPersonEmail}
                />
              </div>
              <div className="grid-item">
                <label> Agency Name:</label>
                <DefaultInput
                  isBots={false}
                  value={detail?.data?.authorizedPersonAgency}
                />
              </div>

              <div className="grid-item full-wid-input">
                <label>
                  Notice to Recipient: This information has been disclosed to
                  you from records that Federal law protects. These records are
                  not subject to re disclosure. Federal regulations (42 CFR Part
                  2) prohibit you from making further disclosure of Substance
                  Abuse Information without this specific written consent of the
                  person to whom it pertains, or as otherwise permitted by such
                  regulations. A general authorization for the release of
                  medical or other information is not sufficient for this
                  purpose.
                </label>
              </div>

              <div className="grid-item full-wid-input d-block">
                <label>
                  I authorize to release the following Information below:
                </label>
                {detail?.data?.dropDown?.map((i, index) => (
                  <DefaultInput isBots={false} value={i} key={index} />
                ))}
              </div>

              <div className="grid-item full-wid-input">
                <label>Purpose of Disclosure:</label>
                <DefaultInput
                  isBots={false}
                  value={detail?.data?.purposeOfDisclosure}
                />
              </div>

              <div className="grid-item full-wid-input">
                <label>
                  I understand that at anytime, I may revoke this authorization
                  by writing to {detail?.data?.companyName} .This revocation
                  will be effective except to the extent that action based on
                  this authorization has already been taken. <br />
                  This authorization for release of information will expire:
                </label>
              </div>

              <div className="grid-item">
                <DefaultInput
                  isBots={false}
                  value={DateInMMDDYY(detail?.data?.expirationTo)}
                />
                <label>One year from date</label>
              </div>
              <div className="grid-item long-input">
                <DefaultInput
                  isBots={false}
                  value={DateInMMDDYY(detail?.data?.revocation)}
                />
                <label>60 Days (Substance Abuse Services)</label>
              </div>
              <div className="grid-item">
                <DefaultInput
                  isBots={false}
                  value={DateInMMDDYY(detail?.data?.expirationFrom)}
                />
              </div>
              <div className="grid-item full-wid-input">
                <label>Other (specify)</label>
                <DefaultInput isBots={false} value={detail?.data?.specify} />
              </div>

              <div className="full-wid-input geid-item">
                <label>
                  By signing below, I acknowledge that I have read and
                  understand this document. I have given authorization to my
                  provider to disclose my records. I understand that my
                  information being disclosed to the receiving agency may no
                  longer be protected under the terms of this agreement.
                </label>
              </div>

              <div className="grid-item  full-wid-input d-block">
                {detail?.data?.signature && (
                  <p>
                    Digitally Sign by {detail?.data?.signature}{" "}
                    {detail?.data?.dateSigned &&
                      DateInMMDDYY(detail?.data?.dateSigned)}{" "}
                    {detail?.data?.signedTime}{" "}
                  </p>
                )}
              </div>

              <div className="grid-item long-input">
                <label>Relationship to Person</label>
                <DefaultInput
                  isBots={false}
                  value={detail?.data?.relationshipToPerson}
                />
              </div>
              <div className="grid-item long-input">
                <label>Witness</label>

                <DefaultInput isBots={false} value={detail?.data?.witness} />
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
      </div>
    </>
  );
};

export default HOC(ViewAuthorization);
