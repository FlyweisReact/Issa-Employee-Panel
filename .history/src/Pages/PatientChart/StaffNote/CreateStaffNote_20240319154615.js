import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import NavWrapper from "../../../../../../Helper/NavWrapper";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  TextareaMaker,
} from "../../../../../../Helper/Makers";

import { getData } from "../../../components/api/api";
import { postApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import NavWrapper from "../../../Helper/NavWrapper";

const CreateStaffNote = () => {
  return (
    <div>CreateStaffNote</div>
  )
}

export default CreateStaffNote