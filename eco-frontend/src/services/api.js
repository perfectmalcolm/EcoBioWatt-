import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const getOverviewData = async () => {
  const response = await api.get("/overview");
  return response.data;
};

export const getFleetData = async () => {
  const response = await api.get("/fleet");
  return response.data;
};

export const getEfficiencyData = async () => {
  const response = await api.get("/efficiency");
  return response.data;
};

export const getEnergyData = async () => {
  const response = await api.get("/energy");
  return response.data;
};

export const getHealthData = async () => {
  const response = await api.get("/health");
  return response.data;
};

export const getRevenueData = async () => {
  const response = await api.get("/revenue");
  return response.data;
};

export const getSystemHealthData = async () => {
  const response = await api.get("/system-health");
  return response.data;
};

export const getActivityData = async () => {
  const response = await api.get("/activity");
  return response.data;
};

export const getUsersData = async () => {
  const response = await api.get("/users");
  return response.data;
};

export default api;