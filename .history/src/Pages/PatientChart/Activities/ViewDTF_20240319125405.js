import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import {
  BorderlessInput,
  BorderlessSelect,
  CheckBoxMaker,
} from "../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { useParams } from "react-router-dom";
export const TableRow = ({ heading, row, input, setInput }) => {
    return (
      <tr>
        <td> {heading} </td>
        {row?.map((i, index) => (
          <td key={index}>
            <div className="Radio_btns">
              <div className="btns">
                <CheckBoxMaker
                  setValue={i?.setValue}
                  value={!i?.value}
                  id={`${heading}${i?.value}`}
                  label=""
                  checked={i?.value}
                />{" "}
              </div>
            </div>
          </td>
        ))}
        <td>
          <BorderlessInput setState={setInput} value={input} type="text" />
        </td>
      </tr>
    );
  };
const ViewDTF = () => {
  return (
    <div>ViewDTF</div>
  )
}

export default ViewDTF