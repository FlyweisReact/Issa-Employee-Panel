/** @format */

import React from "react";
import NavWrapper from "../../Helper/NavWrapper";
import HOC from "../../Layout/Inner/HOC";



const ScheduleGroup = () => {
  return (
    <>
      <NavWrapper title={"Time Sheet / Employee Schedule"} />
    </>
  );
};

export default HOC(ScheduleGroup);
