/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavWrapper from "../../../Helper/NavWrapper";
import { fetchApi } from "../../../Repository/Apis";

const Manaul = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApi(setLoading, "superAdmin/getAllBhrfTherapyTopic", setData);
  }, []);

  return (
    <>
      <NavWrapper title={"BEHAVIORAL HEALTH RESIDENTIAL FACILITY"} />
      
      <Container className="full-width-container">
        
      </Container>

    </>
  );
};

export default Manaul;
