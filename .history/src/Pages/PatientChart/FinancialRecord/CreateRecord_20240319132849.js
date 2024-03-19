import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import { postApi } from "../../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../../../Mod/Modal";
import { getData } from "../../../components/api/api";

const CreateRecord = () => {
  return (
    <div>CreateRecord</div>
  )
}

export default CreateRecord