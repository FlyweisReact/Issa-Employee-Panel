import axios from "axios";
import { Baseurl, Auth } from "../../Baseurl";
import { showMsg } from "../../components/api/ShowMsg";

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
      console.log(res, "api Data");

      if (res.status === 200 && getData === undefined) {
     return   showMsg("Success", res.data.message, "success");
      }
     if (getData) {
       showMsg("Success", res.data.message, "success");
      return getData();

      }
    })
    .catch((err) => {
      console.error(err);

      if (err.response && err.response.data && err.response.data.message) {
        showMsg("Error", err.response.data.message, "danger");
      } else {
        showMsg(
          "Error",
          "An error occurred while processing your request.",
          "danger"
        );
      }
    });
};

