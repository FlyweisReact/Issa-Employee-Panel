import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from "axios";
import { getData } from "../../../components/api/api.js";
import CreateNav from "../../../Helper/CreateNav.js";
import { InputMaker } from "../../../Helper/Makers";
import { deleteApi } from "../../../Repository/Apis.js";


const Reconciliation = () => {
  return (
    <div>Reconciliation</div>
  )
}

export default Reconciliation