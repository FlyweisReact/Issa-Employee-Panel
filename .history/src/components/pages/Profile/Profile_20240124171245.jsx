/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import "./profile.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getSingleUserData } from "../../../Baseurl";
import { postData, updateAdminData } from "../../api/api";
import { showMsg } from "../../api/ShowMsg";
import axios from "axios";

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/getProfil`
      );
      const data = res.data?.data;
      setProfileData(data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);


  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (imageFile) {
      formData.append("image", imageFile);
    }
    if (fullName) {
      formData.append("fullName", fullName);
    }
    if (gender) {
      formData.append("gender", gender);
    }
    if (contactNumber) {
      formData.append("contactNumber", contactNumber);
    }
    if (email) {
      formData.append("email", email);
    }
    if (address) {
      formData.append("address", address);
    }
    if (status) {
      formData.append("userType", status);
    }

    console.log(
      fullName,
      gender,
      contactNumber,
      email,
      address,
      status,
      imageFile
    );
    updateAdminData("employee/updateProfile", formData).then((res) => {
      showMsg("Success", res.data.message, "success");
      setAddress("");
      setContactNumber("");
      setEmail("");
      setFullName("");
      setGender("");
      setStatus("");
      setImageFile(null);
      getProfile();
    });
  };

  return (
    <div className="main-div-profile important">
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
            {" "}
            {profileData?.userType?.toUpperCase()}
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
              <span>
                {profileData?.dateOfBirth
                  ?.split("T")[0]
                  .split("-")
                  .reverse()
                  .join("/")}
              </span>
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
          <label htmlFor="imageInput">
            <img
              src={profileData?.profilePic}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              alt="Profile_Image"
            />
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>

        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="Full Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                type="text"
                placeholder="Gender"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="contactNumber"
                onChange={(e) => setContactNumber(e.target.value)}
                type="number"
                placeholder="Contact Number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="status"
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                placeholder="Status"
              />
            </Form.Group>

            <Button
              onClick={handleSubmit}
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
