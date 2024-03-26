/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData, deleteData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";
import { getApi, removeApi } from "../../../Repository/Apis";
import Loader from "../../../components/Loader/Loader";
import { DateFormtter } from "../../../utils/utils";

const ProgressNote = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    getApi({
      url: "employee/getAllProgressNote",
      setResponse: setData,
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const deleteProgressNoteHandler = (id) => {
    if (!id) {
      return null;
    }
    deleteData(
      "employee/deleteProgressNote",
      id,
      getData(setData, "employee/getAllProgressNote")
    );
    getData(setData, "employee/getAllProgressNote");

    const 
    removeApi({
      url :`employee/deleteProgressNote/${id}` ,
      successMsg  : "Removed !" ,

    })
  };

  return (
    <>
      <CreateNav title={"PROGRESS NOTE"} link={"/create-progress-note"} />

      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
                  <th>Resident’s Name </th>
                  <th>Admit Date</th>
                  <th>Shift</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((data) => (
                  <tr key={data?._id}>
                    <td>{data?.residentName}</td>
                    <td>{DateFormtter(data?.admitDate)}</td>
                    <td>{data?.shift}</td>
                    <td>
                      <div className="icon-joiner">
                        <Link to={`/progree-note/${data?._id}`}>
                          <i className="fa-solid fa-eye" />
                        </Link>
                        <Link to={`/progree-note/${data?._id}`}>
                          <i className="fa-solid fa-edit" />
                        </Link>
                        <i
                          className="fa-solid fa-trash-can"
                          onClick={() => deleteProgressNoteHandler(data?._id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </>
  );
};

export default HOC(ProgressNote);
