import axios from "axios"
import {
  TST_TC1047UJOKNEPTZQ_USERNAME,
  TST_TC1047UJOKNEPTZQ_PASSWORD
} from "react-native-dotenv"
const tSTTCujokneptzq = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047UJOKNEPTZQ_USERNAME,
    password: TST_TC1047UJOKNEPTZQ_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
