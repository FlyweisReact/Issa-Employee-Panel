import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
} from "../../../../../Helper/Makers";
import { SignatureModal } from "../../../../../Mod/Modal";
import { editApi } from "../../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import NavWrapper from "../../../../../Helper/NavWrapper";
const ViewPrn = () => {
  return (
    <div>ViewPrn</div>
  )
}

export default ViewPrn