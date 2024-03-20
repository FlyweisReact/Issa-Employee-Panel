/** @format */

import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Loader from "../../../components/Loader/Loader";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Inner/HOC";
import { downloadReport, fetchApi } from "../../../Repository/Apis";

const Manaul = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApi(setLoading, "superAdmin/getAllBhrfTherapyTopic", setData);
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
    <div ref={compo}></div>
      <NavWrapper title={"BEHAVIORAL HEALTH RESIDENTIAL FACILITY"} />

      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          data?.data?.data?.reverse()?.map((i, index) => (
            <div key={index}>
              <p
                style={{
                  color: "#1A9FB2",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {i.topic}
              </p>{" "}
              <p>NOTE SUMMARY:</p>
              {i.notesSummary?.map((notes, index) => (
                <p style={{ fontWeight: "500" }} key={`notes${index}`}>
                  {notes}
                </p>
              ))}
              <p style={{ fontWeight: "bold", marginBottom: "2rem" }}>
                PLAN/ RECOMMENDATION:
              </p>
              {i.planRecommendation?.map((plan, index) => (
                <p style={{ fontWeight: "500" }} key={`plan${index}`}>
                  {plan}
                </p>
              ))}
            </div>
          ))
        )}
        <button
              className="print_btn hidePrint"
              type="button"
              onClick={handlePrint2}
            >
              PRINT REPORT
            </button>
      </Container>
    </>
  );
};

export default HOC(Manaul);
