import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  DefaultInput,
  MultiSelect,
} from "../../../Helper/Makers";
import { SignatureModal } from "../../../Mod/Modal";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis";
import { ClipLoader } from "react-spinners";

const EditSkill = () => {
  return (
    <div>EditSkill</div>
  )
}

export default EditSkill