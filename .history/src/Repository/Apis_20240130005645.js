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


export function dateFormation(date) {
  if (date) {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  }
}