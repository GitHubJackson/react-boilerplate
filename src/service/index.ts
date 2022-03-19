/*
 * @Desc:
 * @Author: JacksonZhou
 * @Date: 2022/03/15
 * @LastEditTime: 2022/03/15
 */
// helper/utils/service.ts
import axios from 'axios';

export const service = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 100000,
});

// Add a request interceptor
service.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
service.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
