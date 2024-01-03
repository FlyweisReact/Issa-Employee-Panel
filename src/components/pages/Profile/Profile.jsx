import React from "react";
import HOC from "../../layout/HOC";
import "./profile.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Profile = () => {
  return (
    <div className="main-div-profile important">
      <div className="profile">
        <h3>Profile</h3>
        <div className="profile-img">
          <img src="/Profile/Profile.png" alt="Profile_Image" />'
        </div>
        <h4>Jacob Smith</h4>
        <p style={{ color: "#787878" }}>
          STATUS : <span style={{ color: "#4DAF4E" }}>Doctor</span>
        </p>
        <div
          className="profile-div-1"
          style={{
            textAlign: "left",
          }}
        >
          <h6 style={{ fontWeight: "600" }}>Personal Information</h6>

          <div>
            <p className="para-assigned">
              <img src="/Assigned_Patient/calender.png" alt="clock" />

              <span style={{ color: "#787878", paddingRight: "10px" }}>
                DATE OF BIRTH :
              </span>
              <span>DD/MM/YYYY</span>
            </p>
          </div>
          <div>
            <p className="para-assigned">
              <img src="/Assigned_Patient/calender.png" alt="clock" />

              <span style={{ color: "#787878", paddingRight: "10px" }}>
                AGE :
              </span>
              <span>32 YEARS</span>
            </p>
          </div>
          <div>
            <p className="para-assigned">
              <img src="/Assigned_Patient/calender.png" alt="clock" />

              <span style={{ color: "#787878", paddingRight: "10px" }}>
                GENDER :
              </span>
              <span>MALE</span>
            </p>
          </div>
          <div>
            <p className="para-assigned">
              <img src="/Assigned_Patient/calender.png" alt="clock" />

              <span style={{ color: "#787878", paddingRight: "10px" }}>
                EMAIL :
              </span>
              <span>rajnishbro@gmail.com</span>
            </p>
          </div>
          <div>
            <p className="para-assigned">
              <img src="/Assigned_Patient/calender.png" alt="clock" />

              <span style={{ color: "#787878", paddingRight: "10px" }}>
                CONTACT NO. :
              </span>
              <span>(+91) 1234567890</span>
            </p>
          </div>
          <div>
            <p className="para-assigned">
              <img src="/Assigned_Patient/calender.png" alt="clock" />

              <span style={{ color: "#787878", paddingRight: "12px" }}>
                ADDRESS :
              </span>
              <span style={{ display: "flex", flexWrap: "wrap" }}>
                A-190, 7th Block, XYZ Street, California
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="profile">
        <h3>Edit Profile</h3>
        <div className="profile-img">
          <img src="/Profile/Profile.png" alt="Profile_Image" />'
        </div>

        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Gender" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="number" placeholder="Contact Number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Status" />
            </Form.Group>

            <Button
             
              className="btn-profile"
             type="submit"
            >
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default HOC(Profile);
