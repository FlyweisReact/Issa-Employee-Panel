import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import { SignatureModal } from "../../../../../Mod/Modal";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { editApi } from "../../../../../Repository/Apis"

const ViewRecociliation = () => {
  return (
    <div>ViewRecociliation</div>
  )
}

export default ViewRecociliation