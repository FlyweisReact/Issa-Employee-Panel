import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import {
  BorderlessInput,
  DateFormatter,
  MultiSelect,
} from "../../../Helper/Makers";
import { SignatureModal } from "../../../Mod/Modal";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { ClipLoader } from "react-spinners";

const UpdateAuthorization = () => {
  return (
    <div>UpdateAuthorization</div>
  )
}

export default UpdateAuthorization