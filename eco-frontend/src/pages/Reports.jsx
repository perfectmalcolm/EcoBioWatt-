import React, { useEffect, useState } from 'react';
import {
  getOverviewData,
  getEfficiencyData,
  getEnergyData,
  getHealthData,
  getRevenueData,
  getSystemHealthData,
} from '../services/api';
import ReportCard from '../components/ReportCard';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Reports() {
  const [overview, setOverview] = useState(null);
  const [efficiency, setEfficiency] = useState(null);
  const [energy, setEnergy] = useState(null);
  const [health, setHealth] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [systemHealth, setSystemHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReportsData = async () => {
      try {
        const [overviewData, efficiencyData, energyData, healthData, revenueData, systemHealthData] = await Promise.all([
          getOverviewData(),
          getEfficiencyData(),
          getEnergyData(),
          getHealthData(),
          getRevenueData(),
          getSystemHealthData(),
        ]);
        setOverview(overviewData);
        setEfficiency(efficiencyData);
        setEnergy(energyData);
        setHealth(healthData);
        setRevenue(revenueData);
        setSystemHealth(systemHealthData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReportsData();
  }, []);

  if (loading) {
    return <div className="p-6 text-gray-700 dark:text-gray-200">Loading reports data...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error.message}</div>;
  }

  // Prepare data for a simple bar chart (e.g., comparing current values)
  const chartData = {
    labels: ['Energy', 'Efficiency', 'Revenue', 'System Health'],
    datasets: [
      {
        label: 'Current Metrics',
        data: [
          energy?.[0]?.value || 0,
          efficiency?.[0]?.score || 0,
          revenue?.[0]?.amount || 0,
          systemHealth?.[0]?.status === 'Good' ? 100 : 50, // Example mapping
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Key System Metrics Overview',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 text-gray-700 dark:text-gray-200">
      <h1 className="text-2xl font-bold mb-4">Comprehensive Reports</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <ReportCard
          title="Total Energy Consumption"
                    value={energy?.[0]?.value || 'N/A'}
                    unit="kWh"
                    description="Current energy usage across all systems"
                  />
                  <ReportCard
                    title="Overall Efficiency"
                    value={efficiency?.[0]?.score || 'N/A'}
                    unit="%"
                    description="Average operational efficiency"
                  />
                  <ReportCard
                    title="Total Revenue"
                    value={revenue?.[0]?.amount || 'N/A'}
                    unit="$"
                    description="Accumulated revenue this period"
                  />
                  <ReportCard
                    title="System Health Status"
                    value={systemHealth?.[0]?.status || 'N/A'}
                    unit=""
                    description="Current status of all integrated systems"
                  />
                </div>
          
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
                  <Bar data={chartData} options={chartOptions} />
                </div>
          
                {/* You can add more detailed sections or charts here based on specific data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {overview && (
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                              <h2 className="text-xl font-semibold mb-3">Overview Details</h2>
                              <p><strong>Total Energy Logs:</strong> {overview.energy?.length || 0}</p>
                              <p><strong>Total Efficiency Records:</strong> {overview.efficiency?.length || 0}</p>
                              <p><strong>Total Revenue Records:</strong> {overview.revenue?.length || 0}</p>
                              <p><strong>Total System Health Records:</strong> {overview.systemHealth?.length || 0}</p>
                            </div>
                          )}
                          {health && (
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                              <h2 className="text-xl font-semibold mb-3">Health Details</h2>
                              <p><strong>Latest Status:</strong> {health[0]?.status || 'N/A'}</p>
                              <p><strong>CPU Usage:</strong> {health[0]?.cpuUsage || 0}%</p>
                              <p><strong>Memory Usage:</strong> {health[0]?.memory || 0}%</p>
                              <p><strong>Storage Usage:</strong> {health[0]?.storage || 0}%</p>
                            </div>
                          )}
                        </div>              </div>
            );
          }
          