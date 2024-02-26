/** @format */

import React from "react";

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
