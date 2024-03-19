import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../Mod/Modal";
import { getData } from "../../../components/api/api";
import {
  TextareaMaker,
  CheckBoxMaker,
  BorderlessInput,
} from "../../../Helper/Makers";
import { postApi, DateInMMDDYY } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper"

const UpdateContactNote = () => {
  return (
    <div>UpdateContactNote</div>
  )
}

export default UpdateContactNote