/** @format */

import axios from "axios";
import { showMsg } from "../Baseurl";
import html2pdf from "html2pdf.js";

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

export const downloadReport = (fileName, ref) => {
  const options = {
    margin: 0.2,
    filename: `${fileName}.pdf`,
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 1, logging: false },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().from(ref.current).set(options).save();
};

export const downloadReport = (fileName, ref) => {
  const options = {
    margin: 0.2,
    filename: `${fileName}.pdf`,
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 1, logging: false },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().from(ref.current).set(options).save();
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
