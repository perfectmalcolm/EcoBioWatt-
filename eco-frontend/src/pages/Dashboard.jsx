import { useEffect, useState } from "react";
import ActivityFeed from "../components/ActivityFeed";
import ChartPanel from "../components/ChartPanel";
import OverviewCards from "../components/OverviewCards";
import SystemHealth from "../components/SystemHealth";
import {
  getOverviewData,
  getEnergyData,
  getEfficiencyData,
  getRevenueData,
  getHealthData,
  getSystemHealthData,
  getActivityData,
} from "../services/api";

export default function Dashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Dashboard useEffect running");
    const fetchAllData = async () => {
      console.log("fetchAllData initiated");
      let fetchedData = {};
      try {
        console.log("Calling getOverviewData()");
        const overview = await getOverviewData();
        fetchedData.overview = overview;
        console.log("Overview Data fetched:", overview);
      } catch (err) {
        console.error("Error fetching Overview Data:", err);
        setError(err);
        setLoading(false);
        return; // Stop further execution if this fails
      }

      try {
        console.log("Calling getEnergyData()");
        const energy = await getEnergyData();
        fetchedData.energy = energy;
        console.log("Energy Data fetched:", energy);
      } catch (err) {
        console.error("Error fetching Energy Data:", err);
        setError(err);
        setLoading(false);
        return;
      }

      try {
        console.log("Calling getEfficiencyData()");
        const efficiency = await getEfficiencyData();
        fetchedData.efficiency = efficiency;
        console.log("Efficiency Data fetched:", efficiency);
      } catch (err) {
        console.error("Error fetching Efficiency Data:", err);
        setError(err);
        setLoading(false);
        return;
      }

      try {
        console.log("Calling getRevenueData()");
        const revenue = await getRevenueData();
        fetchedData.revenue = revenue;
        console.log("Revenue Data fetched:", revenue);
      } catch (err) {
        console.error("Error fetching Revenue Data:", err);
        setError(err);
        setLoading(false);
        return;
      }

      try {
        console.log("Calling getHealthData()");
        const health = await getHealthData();
        fetchedData.health = health;
        console.log("Health Data fetched:", health);
      } catch (err) {
        console.error("Error fetching Health Data:", err);
        setError(err);
        setLoading(false);
        return;
      }

      try {
        console.log("Calling getSystemHealthData()");
        const systemHealth = await getSystemHealthData();
        fetchedData.systemHealth = systemHealth;
        console.log("System Health Data fetched:", systemHealth);
      } catch (err) {
        console.error("Error fetching System Health Data:", err);
        setError(err);
        setLoading(false);
        return;
      }

      try {
        console.log("Calling getActivityData()");
        const activities = await getActivityData();
        fetchedData.activities = activities;
        console.log("Activity Data fetched:", activities);
      } catch (err) {
        console.error("Error fetching Activity Data:", err);
        setError(err);
        setLoading(false);
        return;
      }

      setData(fetchedData);
      console.log("Data set successfully");
      setLoading(false);
      console.log("setLoading(false) called");
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <div className="p-6 text-gray-700 dark:text-gray-200">Loading dashboard data...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="p-6">
      <OverviewCards data={data} />
      <ChartPanel data={data.energy || []} />
      <SystemHealth health={data.systemHealth?.[0]} />
      <ActivityFeed activities={data.activities || []} />
    </div>
  );
}