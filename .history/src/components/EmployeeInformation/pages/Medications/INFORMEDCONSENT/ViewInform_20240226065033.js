import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  DefaultInput,
} from "../../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../../../Mod/Modal";
import { editApi } from "../../../../../Repository/Apis";
import NavWrapper from "../../../../../Helper/NavWrapper";


const ViewInform = () => {
  return (
    <div>ViewInform</div>
  )
}

export default ViewInform