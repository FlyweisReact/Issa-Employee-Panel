import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteApi, fetchApi } from "../../../../Repository/Apis";
import Loader from "../../../Loader/Loader";
import { fetchApi , deleteApi } from "../../../Repository/Apis";
import Loader from "../../../components/Loader/Loader";

const IncidentReport = () => {
  return (
    <div>IncidentReport</div>
  )
}

export default IncidentReport