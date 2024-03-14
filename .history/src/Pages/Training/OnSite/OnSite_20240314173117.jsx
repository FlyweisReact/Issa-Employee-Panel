/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { deleteApi, fetchApi } from "../../../Repository/Apis.js";
import Loader from "../../../components/Loader/Loader.js";
import CreateNav from "../../../Helper/CreateNav.js";
import HOC from "../../../Layout/Inner/HOC.js";

const OnSite = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(setLoading, `employee/getAllOnSiteFacility`, setList);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteOnSiteFacility/${id}`);
    fetchHandler();
  };

  return (
    <>
      <CreateNav
        title={"ON SITE AND FACILITY ORIENTATION VERIFICATION"}
        link={"/create-on-site-facility"}
      />

      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
                  <th>Training Date</th>
                  <th>Duration </th>
                  <th>Trainer Date </th>
                  <th>Employee Date </th>
                  <th>Employee signature </th>
                  <th>Trainer signature </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {list?.data?.data?.map((item) => (
                  <tr>
                    <td>{item.training?.[0]?.date?.slice(0, 10)}</td>
                    <td>{item.training?.[0]?.duration}</td>
                    <td> {item.trainerDate?.split("").reverse()}</td>
                    <td> {item.employeeDate?.slice(0, 10)}</td>
                    <td> {item.employeeSignature}</td>
                    <td> {item.trainerSignature}</td>
                    <td>
                      <div className="icon-joiner">
                      <Link to={`/view-site/${item}`} >

                      </Link>
                        <Link to={`/edit-on-site/${item._id}`} >
                          <i className="fa-solid fa-edit" />
                        </Link>

                        <i
                          className="fa-regular fa-trash-can"
                          onClick={() => handleDelete(item?._id)}
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

export default HOC(OnSite);
