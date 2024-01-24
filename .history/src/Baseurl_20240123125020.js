/** @format */

import { Store } from "react-notifications-component";
import axios from "axios";
import { Popover } from "react-bootstrap";
export const Baseurl = "https://issa-backend.vercel.app/api/v1/";

export const Auth = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
});

console.log(Auth)
export const showMsg = (title, message, type) =>
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });

export const getSingleUserData = (url) => {
  return axios.get(Baseurl + url, Auth());
};

export const postSingleUserData = (url, data) => {
  return axios.post(Baseurl + url, data, Auth());
};

export const postData = (url, data) => {
  return axios.post(`${Baseurl}${url}`, data, Auth());
};


