/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../../../Repository/Apis";

const Manaul = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApi(setLoading, "superAdmin/getAllBhrfTherapyTopic", setData);
  }, []);
  
  return <div>Manaul</div>;
};

export default Manaul;
