import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table, Button } from "react-bootstrap";
import "./mars.css";
const MARS = () => {
  const suggestions = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    "Strawberry",
    // Add more suggestions as needed
  ];

  const [inputText, setInputText] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const onInputChange = (e) => {
    const inputValue = e.target.value;
    setInputText(inputValue);

    if (!inputValue) {
      setFilteredSuggestions([]);
      return;
    }
    // Filter suggestions based on input value
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const onSuggestionClick = (suggestion) => {
    setInputText(suggestion);
    setFilteredSuggestions([]);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem",display:"flex", }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold",flex:"1" }}>
            MEDICATION ADMINISTRATION RECORD
          </p>
          <p>
          <Button style={{marginRight:"1rem"}} variant="primary" onClick={() => navigate("/employee/medications/mars2")}>+ Add</Button></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <form class="form1q">
            <label for="search">
              <input
                required
                placeholder="Search"
                type="text"
                // value={inputText}
                // onChange={onInputChange}
              />
              {filteredSuggestions.map((suggestion, index) => (
                <div key={index} onClick={() => onSuggestionClick(suggestion)}>
                  {suggestion}
                </div>
              ))}
              <div class="icon">
                <svg
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="swap-on"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <svg
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="swap-off"
                >
                  <path
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <button type="reset" class="close-btn">
                <svg
                  viewBox="0 0 20 20"
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </label>
          </form>
          <Table
            bordered
            responsive
            style={{
              width: "100%",
              borderColor: "black",
            }}
          >
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>Resident's Name:</th>
              <th style={{ border: "1px solid black" }}>D.O.B.:</th>
              <th style={{ border: "1px solid black" }}>Admit Date:</th>
              <th
                style={{ border: "1px solid black", backgroundColor: "#FF0" }}
              >
                Month / Year
              </th>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th>Location :</th>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>
                Psychiatric Provider:
              </th>
              <th style={{ border: "1px solid black" }}>PCP Provider:</th>
              <th style={{ border: "1px solid black" }}>Diet:</th>
              <th>Fluid restrictions :</th>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th>Allergies:</th>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>Medication name:</th>
              <th style={{ border: "1px solid black" }}>
                Medication Instructions:
              </th>
              <th style={{ border: "1px solid black" }}>Time:</th>
              <th style={{ border: "1px solid black" }}>Date:</th>
              <th style={{ border: "1px solid black" }}>isTaken</th>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>Amoxicillin</td>
              <td style={{ border: "1px solid black" }}>
                Take 1 tab by mouth daily
              </td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td
                style={{ backgroundColor: "green", border: "1px solid black" }}
              ></td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>Simvastatin</td>{" "}
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td style={{ border: "1px solid black" }}></td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>Omeprazole</td>{" "}
              <td>3</td>
              <td>3</td>
              <td>4</td>
              <td style={{ border: "1px solid black" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Metformin</td>{" "}
              <td>3</td>
              <td>4</td>
              <td>4</td>
              <td style={{ backgroundColor: "green" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Prednisone</td>{" "}
              <td>3</td>
              <td>3</td>
              <td>4</td>
              <td style={{ backgroundColor: "green" }}></td>
            </tr>
          </Table>
          <Table
            bordered
            responsive
            style={{
              width: "100%",
              borderColor: "black",
              textAlign: "center",
            }}
          >
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>H: Hospital</th>
              <th style={{ border: "1px solid black" }}>HP: Home Pass</th>
              <th style={{ border: "1px solid black" }}>RM: Refused Med</th>
              <th style={{ border: "1px solid black" }}>
                H: On Hold per Provider’s Orders
              </th>
              <th>UN: Unavailable (documentation required)</th>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>Staff Name, Tittle</th>
              <th style={{ border: "1px solid black" }}>Initials</th>
              <th style={{ border: "1px solid black" }}>Staff Name, Tittle</th>
              <th style={{ border: "1px solid black" }}>Initials</th>
              <th style={{ border: "1px solid black" }}>Staff Name, Tittle</th>
              <th style={{ border: "1px solid black" }}>Initials</th>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>1</td>
              <td style={{ border: "1px solid black" }}>2</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4fsdsdf</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>1</td>
              <td style={{ border: "1px solid black" }}>2</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4fsdsdf</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>1</td>
              <td style={{ border: "1px solid black" }}>2</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4fsdsdf</td>
            </tr>
          </Table>

          <div
            className="save-as-draft-btn123"
            style={{
              marginTop: "2rem",
              borderRadius: "0px",
              marginBottom: "5rem",
            }}
          >
            <button
              style={{ borderRadius: "0px" }}
              className="btn1233"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MARS;
