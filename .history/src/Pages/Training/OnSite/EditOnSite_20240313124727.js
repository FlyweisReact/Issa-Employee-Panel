import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  BorderlessInput,
  DateFormatter,
  MultiSelect,
} from "../../../Helper/Makers.js";
import { ClipLoader } from "react-spinners";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis.js";
import NavWrapper from "../../../Helper/NavWrapper.js";
import { SignatureModal } from "../../../Mod/Modal.js";
import HOC from "../../../Layout/Inner/HOC.js";

const EditOnSite = () => {
  return (
    <div>EditOnSite</div>
  )
}

export default EditOnSite