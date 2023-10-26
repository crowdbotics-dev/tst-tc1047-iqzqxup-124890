import axios from "axios"
import {
  TST_TC1047YQAATIYEUH_USERNAME,
  TST_TC1047YQAATIYEUH_PASSWORD
} from "react-native-dotenv"
const tSTTCyqaatiyeuh = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047YQAATIYEUH_USERNAME,
    password: TST_TC1047YQAATIYEUH_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
