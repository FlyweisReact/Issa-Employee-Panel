/** @format */

import React, { useState } from "react";
import NavWrapper from "../../Helper/NavWrapper";
import HOC from "../../Layout/Outer/HOC";

const MentalStatus = () => {
    const [ data , setData ] = useState({})
    const [ loading , setLoading ]  = useState(false)




  return (
    <>
      <NavWrapper
        title={"Mental Status Examination Reports (Before appointment)"}
      />
    </>
  );
};

export default HOC({ Wcomponenet: MentalStatus });
