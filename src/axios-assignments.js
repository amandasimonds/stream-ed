import axios from "axios";

const instance = axios.create({
  baseURL: "https://stream-ed.firebaseio.com/",
});
export default instance;
