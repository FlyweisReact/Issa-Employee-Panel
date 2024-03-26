/** @format */

import React from "react";
import NavWrapper from "../../Helper/NavWrapper";
import HOC from "../../Layout/Inner/HOC";
import {} from '../../'

const data = [
  {
    src: "",
    link: "/schedule",
  },
  {
    src: "",
    link: "/time-sheet",
  },
];

const ScheduleGroup = () => {
  return (
    <>
      <NavWrapper title={"Time Sheet / Employee Schedule"} />
    </>
  );
};

export default HOC(ScheduleGroup);
