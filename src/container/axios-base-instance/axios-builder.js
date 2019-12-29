import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-ae2fc.firebaseio.com/"
});

export default instance;
