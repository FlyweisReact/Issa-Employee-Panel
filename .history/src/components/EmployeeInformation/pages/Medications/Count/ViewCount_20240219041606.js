import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../../Helper/Makers";


const ViewCount = () => {
  return (
    <div>ViewCount</div>
  )
}

export default ViewCount