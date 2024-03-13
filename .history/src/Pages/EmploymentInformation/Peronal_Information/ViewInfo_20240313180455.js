/** @format */

import React, { useEffect, useState, useRef } from "react";
import "./Personal.css";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  DateFormatter,
  DefaultInput,
} from "../../../Helper/Makers";
import { SignatureModal } from "../../../Mod/Modal";
import { ClipLoader } from "react-spinners";
import {
  DateInMMDDYY,
  downloadReport,
  postApi,
} from "../../../Repository/Apis";
import { getData } from "../../../components/api/api";
import HOC from "../../../Layout/Outer/HOC";

const ViewInfo = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData(setData, "employee/getPersonalInformation");
  }, []);

  return (
    <>
      <NavWrapper
        title={"EMPLOYEE PERSONNEL INFORMATION/EMERGENCY CONTACT"}
        isArrow={true}
      />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input" />
            <div className="grid-item" />
            <div className="grid-item">
              <label>Date:</label>
              <DefaultInput
                isBots={false}
                value={DateInMMDDYY(data?.data?.date)}
              />
            </div>
            <div className="grid-item long-input print_this">
              <label>Last Name:</label>
              <DefaultInput isBots={false} value={data?.data?.lastName} />
            </div>
            <div className="grid-item">
              <label>First:</label>
              <DefaultInput isBots={false} value={data?.data?.firstName} />
            </div>
            <div className="grid-item">
              <label>MI:</label>
              <DefaultInput isBots={false} value={data?.data?.middleInitial} />
            </div>
            <div className="grid-item full-wid-input">
              <label>Address:</label>
            </div>
            <div className="grid-item full-wid-input">
              <label>Street:</label>
              <DefaultInput isBots={false} value={data?.data?.addressStreet} />
            </div>
            <div className="grid-item long-input">
              <label>City:</label>
              <DefaultInput isBots={false} value={data?.data?.addressCity} />
            </div>
            <div className="grid-item">
              <label>State:</label>
              <DefaultInput isBots={false} value={data?.data?.addressState} />
            </div>
            <div className="grid-item">
              <label>Zip:</label>
              <DefaultInput isBots={false} value={data?.data?.addressZip} />
            </div>
            <div className="grid-item long-input">
              <label>Soc Sec No:</label>
              <DefaultInput isBots={false} value={data?.data?.socSecNo} />
            </div>
            <div className="grid-item long-input">
              <label>Birth Date:</label>
              <DefaultInput
                isBots={false}
                value={DateFormatter(data?.data?.birthDate)}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Telephone:</label>
            </div>
            <div className="grid-item long-input">
              <label>Home:</label>
              <DefaultInput isBots={false} value={data?.data?.telephoneHome} />
            </div>
            <div className="grid-item long-input">
              <label>Personal Cell:</label>
              <DefaultInput
                isBots={false}
                value={data?.data?.telephonePersonalCell}
              />
            </div>
            <div className="grid-item long-input">
              <label>Work:</label>
              <DefaultInput isBots={false} value={data?.data?.telephoneWork} />
            </div>
            <div className="grid-item long-input">
              <label>Business Cell:</label>
              <DefaultInput
                isBots={false}
                value={data?.data?.telephoneBusinessCell}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Driver’s License:</label>
            </div>
            <div className="grid-item long-input">
              <label>State of Issue:</label>
              <DefaultInput isBots={false} value={data?.data?.dLStateOfIssue} />
            </div>
            <div className="grid-item long-input">
              <label>No:</label>
              <DefaultInput isBots={false} value={data?.data?.dLNumber} />
            </div>
            <div className="grid-item long-input">
              <label>Expiration Date:</label>
              <DefaultInput
                isBots={false}
                value={DateFormatter(data?.data?.dLExpirationDate)}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Business Email:</label>
              <DefaultInput isBots={false} value={data?.data?.businessEmail} />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Personal Email:</label>
              <DefaultInput isBots={false} value={data?.data?.personalEmail} />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Emergency Contact:</label>
              <DefaultInput
                isBots={false}
                value={data?.data?.emergencyContactName}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <DefaultInput
                isBots={false}
                value={data?.data?.emergencyContactRelationship}
              />
              <label>Relationship:</label>
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Emergency Contact Phone:</label>
              <DefaultInput
                isBots={false}
                value={data?.data?.emergencyContactNumber}
              />
            </div>
            <div className="grid-item long-input"></div>
          </div>
          <div className="custome-cloud-btn">
            <div>
              {data?.data?.savedSigned && (
                <p>Digitally Sign by {data?.data?.savedSigned}</p>
              )}
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

export default HOC({ Wcomponenet: ViewInfo, isNavbar: false });
