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

export const downloadReport = (fileName , id) => {
  const element = doy;
  const options = {
    margin: 0.5,
    filename: `${fileName}.pdf`,
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 , logging : false },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().from(element).set(options).save();
};
