/** @format */

import React from "react";
import { getData } from "../../../../../api/api";

const ViewStaff = () => {
  const fetchHandler = () => {
    getData(setDetails, `employee/getStaffingNoteById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);
  return <div>ViewStaff</div>;
};

export default ViewStaff;
