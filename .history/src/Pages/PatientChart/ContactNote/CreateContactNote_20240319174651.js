/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../Mod/Modal";
import { getData } from "../../../components/api/api";
import {
  InputMaker,
  TextareaMaker,
  CheckBoxMaker,
} from "../../../Helper/Makers";
import { postApi } from "../../../Repository/Apis";

const CreateContactNote = () => {
  return <div>CreateContactNote</div>;
};

export default CreateContactNote;
