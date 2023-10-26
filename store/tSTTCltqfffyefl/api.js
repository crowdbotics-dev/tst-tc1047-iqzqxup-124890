import axios from "axios"
import {
  TST_TC1047LTQFFFYEFL_PASSWORD,
  TST_TC1047LTQFFFYEFL_USERNAME
} from "react-native-dotenv"
const tSTTCltqfffyefl = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047LTQFFFYEFL_PASSWORD,
    password: TST_TC1047LTQFFFYEFL_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
