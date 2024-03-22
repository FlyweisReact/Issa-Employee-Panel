/** @format */

import React, { useState } from "react";
import NavWrapper from "../../Helper/NavWrapper";
import HOC from "../../Layout/Outer/HOC";
import { fetchApi } from "../../Repository/Apis";

const MentalStatus = () => {
    const [ data , setData ] = useState({})
    const [ loading , setLoading ]  = useState(false)

    const fetchHandler = () => {
        fetchApi(setLoading , "Patient/")
    }




  return (
    <>
      <NavWrapper
        title={"Mental Status Examination Reports (Before appointment)"}
      />
    </>
  );
};

export default HOC({ Wcomponenet: MentalStatus });
