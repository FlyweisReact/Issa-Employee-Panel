import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import { getData } from "../../../components/api/api";
import { MultiSelect } from "../../../Helper/Makers";
import { SignatureModal } from "../../../Mod/Modal";
import { postApi } from "../../../Repository/Apis";

const CreateAuthorization = () => {
  return (
    <div>CreateAuthorization</div>
  )
}

export default CreateAuthorization