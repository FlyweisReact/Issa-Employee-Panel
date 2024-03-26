/** @format */

import axios from "axios";
import { showMsg } from "../Baseurl";

export const fetchApi = async (setLoading, url, setResponse) => {
  setLoading(true);
  try {
    const res = await axios.get(`${process.env.React_App_Baseurl}${url}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setResponse(res);
    setLoading(false);
  } catch (e) {
    console.log(e);
    setLoading(false);
    setResponse({});
  }
};

export const editApi = async (setLoading, url, payload) => {
  setLoading(true);
  try {
    const res = await axios.put(
      `${process.env.React_App_Baseurl}${url}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const msg = res?.data?.message;
    showMsg("", msg, "success");
    setLoading(false);
  } catch (e) {
    console.log(e);
    setLoading(false);
    const msg = e?.response?.data?.message;
    showMsg("", msg, "danger");
  }
};

export const deleteApi = async (url) => {
  try {
    const res = await axios.delete(`${process.env.React_App_Baseurl}${url}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const msg = res?.data?.message;
    showMsg("", msg, "success");
  } catch (e) {
    console.log(e);
    const msg = e?.response?.data?.message;
    showMsg("", msg, "danger");
  }
};

export const postApi = async (setLoading, url, payload) => {
  setLoading(true);
  try {
    const res = await axios.post(
      `${process.env.React_App_Baseurl}${url}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setLoading(false);
    const msg = res?.data?.message;
    showMsg("", msg, "success");
  } catch (e) {
    setLoading(false);
    console.log(e);
    const msg = e?.response?.data?.message;
    showMsg("", msg, "danger");
  }
};

export const UploadImage = async (file, setResponse) => {
  const fd = new FormData();
  fd.append("image", file);
  try {
    const res = await axios.post(
      `${process.env.React_App_Baseurl}employee/updateImage`,
      fd
    );
    setResponse(res?.data?.data);
  } catch {}
};

export const downloadReport = (handlePrint) => {
  var elements = document.getElementsByClassName("hidePrint");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  handlePrint();
  setTimeout(() => {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
  }, 1000);
};

export const DateInMMDDYY = (date) => {
  const originalDate = new Date(date);
  const timezoneOffset = originalDate?.getTimezoneOffset();
  const adjustedTime = new Date(
    originalDate?.getTime() + timezoneOffset * 60000
  );
  const year = adjustedTime?.getFullYear();
  const month = adjustedTime?.getMonth() + 1;
  const day = adjustedTime?.getDate();

  return `${month < 10 ? `0${month}` : month}/${
    day < 10 ? `0${day}` : day
  }/${year}`;
};


// Api Module

export const getApi = async ({
  url,
  setResponse,
  setLoading,
  additionalFunctions = [],
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.get(`${Baseurl}${url}`);
    setResponse(res.data);
    additionalFunctions.forEach((func) => {
      if (typeof func === "function") {
        func();
      }
    });
  } catch (e) {
    console.log(e);
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};