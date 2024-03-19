import React, { useEffect, useState } from "react";
import { postApi } from "../../../../../../Repository/Apis";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../../../../api/api";
import { SignatureModal } from "../../../../../../Mod/Modal";
import { ClipLoader } from "react-spinners";
import NavWrapper from "../../../../../../Helper/NavWrapper";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  TextareaMaker,
} from "../../../../../../Helper/Makers";

import { getData } from "../../../components/api/api";

const CreateStaffNote = () => {
  return (
    <div>CreateStaffNote</div>
  )
}

export default CreateStaffNote