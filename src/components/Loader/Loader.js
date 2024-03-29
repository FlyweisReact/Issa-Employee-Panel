/** @format */

import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="spinner">
      <ClipLoader color="rgb(26, 159, 178)" />
    </div>
  );
};

export default Loader;