import axios from "axios";
import { baseUrl } from "./constants/constants.js"
const Axios = axios.create({
    baseURL: baseUrl,
})
export default Axios