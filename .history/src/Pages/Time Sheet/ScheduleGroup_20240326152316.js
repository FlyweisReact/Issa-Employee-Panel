/** @format */

import React from "react";
import NavWrapper from "../../Helper/NavWrapper";
import HOC from "../../Layout/Inner/HOC";

const data = [
    {
        src : "" ,
        link : "/schedule"
    },
    {
        src : "" ,
        link : "/schedule"
    },
]

const ScheduleGroup = () => {
  return (
    <>
      <NavWrapper title={"Time Sheet / Employee Schedule"} />
    </>
  );
};

export default HOC(ScheduleGroup);
