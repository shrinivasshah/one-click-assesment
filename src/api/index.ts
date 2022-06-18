import axios from "axios";

export default axios.create({
  baseURL: "https://api-dev.instafi.finance/",
  timeout: 2000,
});
