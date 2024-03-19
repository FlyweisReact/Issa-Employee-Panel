import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { fetchApi , deleteApi } from "../../../Repository/Apis";
import { Loader}
import Loader from "../../../../Loader/Loader";

const FinancialRecord = () => {
  return (
    <div>FinancialRecord</div>
  )
}

export default FinancialRecord