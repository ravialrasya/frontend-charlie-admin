// lib/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.kapct.co.id/api/v1",
  withCredentials: true,
});
