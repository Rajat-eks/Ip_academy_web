import * as axios from "axios";

const ACCESS_TOKEN = () => {
  return localStorage.getItem("access_token")
    ? `Bearer ${localStorage.getItem("access_token")}`
    : undefined;
};

let axiosObject = axios.default.create();
// axiosObject.defaults.baseURL = "https://ip-academy-apis.onrender.com/api/v1/";
axiosObject.defaults.baseURL = "http://localhost:8080/api/v1/";
axiosObject.defaults.timeout = 8000;
axiosObject.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json",
 
};
axiosObject.interceptors.request.use(config => {
  config.headers.Authorization = ACCESS_TOKEN();
  return config;
});

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
