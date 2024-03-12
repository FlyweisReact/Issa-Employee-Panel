/** @format */
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TrainingConstant } from "../../Constant/Constant";
import HOC from "../../Layout/Inner/HOC";

const Training = () => {
  return (
    <>
      <div className="nav-wrap-personal">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>TRAINING</p>
          <p></p>
        </div>
      </div>

      <Container>
        <div className="patient_chart_container">
          {TrainingConstant?.map((i, index) => (
            <Link to={i?.link} key={index}>
              <img src={i.src} alt="" />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default HOC(Training);
