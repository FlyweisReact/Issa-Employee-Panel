/** @format */

import { Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { DateInMMDDYY, downloadReport, fetchApi } from "../../Repository/Apis";
import { getData } from "../../components/api/api";
import HOC from "../../Layout/Inner/HOC";
import NavWrapper from "../../Helper/NavWrapper";
import { DefaultInput } from "../../Helper/Makers";
import Loader from "../../components/Loader/Loader";
import { useReactToPrint } from "react-to-print";

const ViewTimeOfRequest = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getData(setProfile, `employee/getProfile`);
  }, []);

  const [data, setData] = useState([]);

  const getAllData = () => {
    fetchApi(setLoading, "employee/getAllTimeOffRequest", setData);
  };

  useEffect(() => {
    getAllData();
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
        <NavWrapper title={"TIME OF REQUEST"} isArrow={true} />
        {loading ? (
          <Loader />
        ) : (
          <Container className="full-width-container">
            <form className="w-100 text-start">
              <div className="grid-container">
                <div className="grid-item">
                  <label>Time of Request: </label>
                  <DefaultInput value={data?.data?.data?.requestType} />
                </div>
                <div className="grid-item third-wid-input"></div>
                <div className="grid-item long-input">
                  <label>Employee Name:</label>
                  <DefaultInput value={profile?.data?.fullName} />
                </div>
                <div className="grid-item long-input" />
                <div className="grid-item">
                  <label>Begin Date requested:</label>

                  <DefaultInput
                    value={DateInMMDDYY(data?.data?.data?.beginDate)}
                  />
                </div>
                <div className="grid-item long-input" />
                <div className="grid-item">
                  <label>End Date requested:</label>
                  <DefaultInput
                    value={DateInMMDDYY(data?.data?.data?.endDate)}
                  />
                </div>
                <div className="grid-item">
                  <label>Normal Shift:</label>
                  <DefaultInput value={data?.data?.data?.normalShift} />
                </div>
                <div className="grid-item">
                  <label>Unpaid Hours left:</label>

                  <DefaultInput value={data?.data?.data?.unPaidHrLeft} />
                </div>
                <div className="grid-item">
                  <label>Vacation/Personal time used:</label>

                  <DefaultInput
                    value={data?.data?.data?.vacationPersonTimeUsed}
                  />
                </div>
                <div className="grid-item">
                  <label>Sick Time used:</label>

                  <DefaultInput value={data?.data?.data?.sickTimeUsed} />
                </div>
                <div className="grid-item full-wid-input">
                  <label>For Administrator</label>
                </div>
                <div className="grid-item full-wid-input">
                  <label>Time off request approved:</label>
                  <DefaultInput value={data?.data?.data?.timeOf} />
                </div>
                <div className="grid-item full-wid-input">
                  <label>Notes: </label>
                  <DefaultInput value={data?.data?.data?.notes} />
                </div>

                <div className="grid-input full-wid-input">
                  <label>Signature:</label>
                  <DefaultInput value={data?.data?.data?.signature} />
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
        )}
      </div>
    </>
  );
};

export default HOC(ViewTimeOfRequest);
