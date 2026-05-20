import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://13.127.71.122:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;