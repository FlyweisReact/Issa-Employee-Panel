/** @format */

import axios from "axios";
import { process.env.React_App_Baseurl, Auth } from "../../process.env.React_App_Baseurl";

export const getData = (setData, url) => {
  return axios
    .get(`${process.env.React_App_Baseurl}${url}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      if (res.data?.data?.length === 0) {
      }
      return setData(res?.data);
    })
    .catch((err) => {
      if (err.response.status === 401) {
        return setData([]);
      }
    });
};

export const getDataById = (setData, url, id) => {
  axios
    .get(`${process.env.React_App_Baseurl}${url}/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      return setData(res?.data);
    })
    .catch((err) => {});
};

export const postData = (url, data, getData) => {
  axios
    .post(`${process.env.React_App_Baseurl}${url}`, data,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      if (res.status === 200 && getData === undefined) {
        return     }
      if (getData) {
        return getData();
      }
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) {
      } else {
      }
    });
};

export const deleteData = (url, id, getData) => {
  axios
    .delete(`${process.env.React_App_Baseurl}${url}/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      if (res.status === 200 && getData === undefined) {
        window.location.reload();
        return;
      }
      if (getData) {
        return getData();
      }
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) {
      }
    });
};

export const updateAdminData = (url, data) => {
  return axios.put(`${process.env.React_App_Baseurl}${url}`, data,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
};

export const updateDataById = (url, id, data) => {
  return axios
    .put(`${process.env.React_App_Baseurl}${url}/${id}`, data,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      return;
    })
    .catch((err) => {});
};
