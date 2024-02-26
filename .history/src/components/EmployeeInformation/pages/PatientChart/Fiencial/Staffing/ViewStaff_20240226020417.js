/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import NavWrapper from "../../../../../../Helper/NavWrapper";
import { getData } from "../../../../../api/api";

const ViewStaff = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const fetchHandler = () => {
    getData(setDetails, `employee/getStaffingNoteById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);
  return (
    <>
      <NavWrapper isArrow={true} title={"STAFFING NOTE"} />
    </>
  );
};

export default ViewStaff;
