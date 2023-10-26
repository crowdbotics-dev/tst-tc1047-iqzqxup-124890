import axios from "axios"
import {
  TST_TC1047YBFOTZLLJI_USERNAME,
  TST_TC1047YBFOTZLLJI_PASSWORD
} from "react-native-dotenv"
const tSTTCybfotzllji = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047YBFOTZLLJI_USERNAME,
    password: TST_TC1047YBFOTZLLJI_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
