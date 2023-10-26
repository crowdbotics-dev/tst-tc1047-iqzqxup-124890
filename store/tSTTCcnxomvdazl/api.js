import axios from "axios"
import {
  TST_TC1047CNXOMVDAZL_PASSWORD,
  TST_TC1047CNXOMVDAZL_USERNAME
} from "react-native-dotenv"
const tSTTCcnxomvdazl = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047CNXOMVDAZL_PASSWORD,
    password: TST_TC1047CNXOMVDAZL_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
