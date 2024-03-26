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
      <Container>
        <div className="patient_chart_container">
          {data?.map((i, index) => (
            <Link to={i?.link} key={index}>
              <img src={i.src} alt="" />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default HOC(ScheduleGroup);
