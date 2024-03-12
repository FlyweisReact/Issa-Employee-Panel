/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import HOC from "../../Layout/Outer/HOC";

const SearchPage = () => {
  return (
    <Container className="full-width-container">
      <div className="search-page">
        <div className="tabs-list">
          <ul>
            <li>Info</li>
            <li>Documents</li>
            <li>Vitals</li>
            <li>Medications</li>
            <li>Intake</li>
            <li>Schedule</li>
          </ul>
        </div>

        <div className="overflow-table">
          <table>
            <tr>
              <th>Document</th>
              <th>Service</th>
              <th>Date</th>
            </tr>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default HOC({ Wcomponenet: SearchPage });
