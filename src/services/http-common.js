import axios from "axios";

export const HTTP = axios.create({
  //   baseURL: `http://jsonplaceholder.typicode.com/`,
  baseURL: `https://fh-vue-default-rtdb.firebaseio.com/`,
  headers: {
    // Authorization: "Bearer {token}",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});
