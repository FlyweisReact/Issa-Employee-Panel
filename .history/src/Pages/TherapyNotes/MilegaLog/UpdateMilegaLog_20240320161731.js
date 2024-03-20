import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Inner/HOC";
import { BorderlessInput, DateFormatter } from "../../../Helper/Makers";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import { ClipLoader } from "react-spinners";

const UpdateMilegaLog = () => {
  return (
    <div>UpdateMilegaLog</div>
  )
}

export default UpdateMilegaLog