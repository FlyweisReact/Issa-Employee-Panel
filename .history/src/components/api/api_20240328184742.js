/** @format */

import axios from "axios";
import { Baseurl, Auth } from "../../Baseurl";

export const getData = (setData, url) => {
  return axios
    .get(`${process.env.React_App_Baseurl}${url}`, Auth())
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
    .get(`${Baseurl}${url}/${id}`, Auth())
    .then((res) => {
      return setData(res?.data);
    })
    .catch((err) => {});
};

export const postData = (url, data, getData) => {
  axios
    .post(`${Baseurl}${url}`, data, Auth())
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
    .delete(`${Baseurl}${url}/${id}`, Auth())
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
  return axios.put(`${Baseurl}${url}`, data, Auth());
};

export const updateDataById = (url, id, data) => {
  return axios
    .put(`${Baseurl}${url}/${id}`, data, Auth())
    .then((res) => {
      return;
    })
    .catch((err) => {});
};
