import * as axios from "axios";

const ACCESS_TOKEN = localStorage.getItem("access_token")
  ? `Bearer ${localStorage.getItem("access_token")}`
  : undefined;

let axiosObject = axios.default.create();
axiosObject.defaults.baseURL = "http://localhost:8080/api/v1/";
axiosObject.defaults.timeout = 2000;
axiosObject.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: ACCESS_TOKEN,
};

axiosObject.interceptors.request.use(
  async function (config: any) {
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

axiosObject.interceptors.response.use(
  async function (config: any) {
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

export default axiosObject;
