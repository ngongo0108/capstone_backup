import axios, { AxiosResponse } from "axios";

import { baseURL } from "./endPoint";

//
const http = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

//
http.interceptors.request.use(async (request) => {
  const session = await localStorage.getItem("session");
  if (session) {
    const sessionData = JSON.parse(session);
    request.headers.Authorization = `Bearer ${sessionData.token}`;
  }
  return request;
});

const handleResponse = (res: AxiosResponse) => {
  if (res && res.data) {
    return res.data;
  }
  return res;
};
const handleError = (error: { response: { data: any } }) => {
  try {
    const { data } = error.response;
    return data;
  } catch (error) {
    // clear session
    localStorage.removeItem("session");
    return { result: null, message: "Server error" };
  }
};
http.interceptors.response.use(
  (response) => {
    return handleResponse(response);
  },
  (error) => {
    console.log("error", error);
    localStorage.removeItem("session");
    return handleError(error);
  }
);

export default http;
