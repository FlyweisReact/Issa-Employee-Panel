import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { postApi } from "../../../../Repository/Apis";
import { SignatureModal } from "../../../../Mod/Modal";
import { DateFormatter } from "../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";

const CreateDTF = () => {
  return (
    <div>CreateDTF</div>
  )
}

export default CreateDTF