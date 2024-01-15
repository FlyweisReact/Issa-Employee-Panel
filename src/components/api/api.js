import axios from "axios";
import { Baseurl, Auth } from "../../Baseurl";
import { showMsg } from "./ShowMsg";

export const getData = (setData, url) => {
  return axios
    .get(`${Baseurl}${url}`, Auth())
    .then((res) => {
      console.log(res.data.data);
      if (res.data?.data?.length === 0) {
        showMsg("Error", "No Data Available", "danger");
      }
      return setData(res?.data);
    })
    .catch((err) => {
      if (err.response.status === 401) {
        showMsg("Error", err.response.data.message, "danger");
      }
      console.log(err);
    });
};

const postData = (url, data, getData) => {
  axios
    .post(`${Baseurl}${url}`, data, Auth())
    .then((res) => {
      console.log(res);
      showMsg("Success", res.message, "success");
      if (getData) {
        getData();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
