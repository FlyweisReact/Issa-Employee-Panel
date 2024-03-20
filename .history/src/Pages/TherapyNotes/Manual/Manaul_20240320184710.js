import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../../../Repository/Apis";

const Manaul = () => {
    const [data, setData] = useState({});
  
    useEffect(() => {
      getData(setData, `superAdmin/getAllBhrfTherapyTopic`);
      fetchApi()
    }, []);
  return (
    <div>Manaul</div>
  )
}

export default Manaul