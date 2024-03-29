/** @format */

import React, { useEffect, useState } from "react";
import "./profile.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import HOC from "../../Layout/Outer/HOC";

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);

  const Auth = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/getProfile`,
        Auth
      );
      const data = res.data?.data;
      setProfileData(data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const fd = new FormData();

  function appendIfPresent(formValue, value) {
    if (value) {
      fd.append(formValue, value);
    }
  }
  appendIfPresent("image", image);
  appendIfPresent("fullName", fullName);
  appendIfPresent("gender", gender);
  appendIfPresent("mobileNumber", mobileNumber);
  appendIfPresent("email", email);
  appendIfPresent("address", address);
  appendIfPresent("userType", status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.React_App_Baseurl}employee/updateProfile`,
        fd,
        Auth
      );
      const msg = res.data.message;

      if (profileData) {
        const parsingData = JSON.stringify(profileData);
        localStorage.setItem("user-profile", parsingData);
      }
      fetchHandler();
    } catch {}
  };

  return (
    <div className="main-div-profile important">
      {profileData && (
        <div className="profile">
          <h3>Profile</h3>
          <div className="profile-img">
            <img
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              src={profileData?.profilePic || "/profile.png"}
              alt="Profile_Image"
            />
            '
          </div>
          <h4>{profileData?.fullName}</h4>
          <p style={{ color: "#787878" }}>
            STATUS :{" "}
            <span style={{ color: "#4DAF4E" }}>
              {profileData?.isVerified ? "Verified " : "UnVerified"}
            </span>
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
                <span>{profileData?.dateOfBirth}</span>
              </p>
            </div>
            <div>
              <p className="para-assigned">
                <img src="/Assigned_Patient/calender.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  AGE :
                </span>
                <span></span>
              </p>
            </div>
            <div>
              <p className="para-assigned">
                <img src="/Assigned_Patient/calender.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  GENDER :
                </span>
                <span> {profileData?.gender} </span>
              </p>
            </div>
            <div>
              <p className="para-assigned">
                <img src="/Assigned_Patient/calender.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  EMAIL :
                </span>
                <span> {profileData?.email} </span>
              </p>
            </div>
            <div>
              <p className="para-assigned">
                <img src="/Assigned_Patient/calender.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "10px" }}>
                  CONTACT NO. :
                </span>
                <span> {profileData?.mobileNumber} </span>
              </p>
            </div>
            <div>
              <p className="para-assigned">
                <img src="/Assigned_Patient/calender.png" alt="clock" />

                <span style={{ color: "#787878", paddingRight: "12px" }}>
                  ADDRESS :
                </span>
                <span style={{ display: "flex", flexWrap: "wrap" }}>
                  {profileData?.address}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="profile">
        <h3>Edit Profile</h3>
        <div className="profile-img mb-3">
          <label htmlFor="imageInput">
            <img
              src={profileData?.profilePic}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
              alt="Profile_Image"
            />
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                required
                placeholder="Full Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                type="text"
                required
                placeholder=" Gender"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="contactNumber"
                onChange={(e) => setMobileNumber(e.target.value)}
                type="tel"
                required
                placeholder="Contact Number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                required
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                required
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="status"
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                required
                placeholder="Status"
              />
            </Form.Group>

            <Button className="btn-profile" type="submit">
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default HOC({ Wcomponenet: Profile });
