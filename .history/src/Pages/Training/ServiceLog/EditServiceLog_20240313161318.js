import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";
import NavWrapper from "../../../Helper/NavWrapper.js";
import HOC from "../../../Layout/Inner/HOC.js";
import { BorderlessInput, DateFormatter } from "../../../Helper/Makers.js";
import { SignatureModal } from "../../../Mod/Modal.js";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis.js";
import { ClipLoader } from "react-spinners";

const EditServiceLog = () => {
  return (
    <div>EditServiceLog</div>
  )
}

export default EditServiceLog