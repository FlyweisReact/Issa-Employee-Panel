/** @format */

import React from "react";
import NavWrapper from "../../Helper/NavWrapper";
import HOC from "../../Layout/Outer/HOC";

const MentalStatus = () => {
  return (
    <>
      <NavWrapper
        title={"Mental Status Examination Reports (Before appointment)"}
      />
    </>
  );
};

export default HOC({ Wcomponenet: MentalStatus });
