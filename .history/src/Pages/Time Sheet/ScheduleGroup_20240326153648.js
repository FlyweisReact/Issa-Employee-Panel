/** @format */

import React from "react";
import NavWrapper from "../../Helper/NavWrapper";
import HOC from "../../Layout/Inner/HOC";
import { trimImg, scheduleImg } from "../../assets/index";

const data = [
  {
    src: scheduleImg,
    link: "/schedule",
  },
  {
    src: trimImg,
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
