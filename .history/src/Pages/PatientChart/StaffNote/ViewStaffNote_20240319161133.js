
import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  TextareaMaker,
} from "../../../Helper/Makers";
import HOC from "../../../Layout/Inner/HOC";
import { useParams } from "react-router-dom";

const ViewStaffNote = () => {
  return (
    <div>ViewStaffNote</div>
  )
}

export default ViewStaffNote