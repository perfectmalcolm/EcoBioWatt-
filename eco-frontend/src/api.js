import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api", // backend base URL
});

// Example calls
export const fetchEnergy = () => API.get("/energy");
export const fetchEfficiency = () => API.get("/efficiency");
export const fetchRevenue = () => API.get("/revenue");
export const fetchHealth = () => API.get("/health");
export const fetchActivity = () => API.get("/activity");
