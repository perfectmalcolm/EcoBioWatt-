import React, { useEffect, useState } from 'react';
import {
  getUsersData,
  getEnergyData,
  getEfficiencyData,
  getRevenueData,
  getSystemHealthData,
  getActivityData,
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

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [energyLogs, setEnergyLogs] = useState([]);
  const [efficiencyData, setEfficiencyData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [systemHealthData, setSystemHealthData] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('Users');

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const [usersRes, energyRes, efficiencyRes, revenueRes, systemHealthRes, activitiesRes] = await Promise.all([
          getUsersData(),
          getEnergyData(),
          getEfficiencyData(),
          getRevenueData(),
          getSystemHealthData(),
          getActivityData(),
        ]);
        setUsers(usersRes);
        setEnergyLogs(energyRes);
        setEfficiencyData(efficiencyRes);
        setRevenueData(revenueRes);
        setSystemHealthData(systemHealthRes);
        setActivities(activitiesRes);
      } catch (err) {
        setError(err);
        console.error("Error fetching admin dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  if (loading) {
    return <div className="p-6 text-gray-700 dark:text-gray-200">Loading admin dashboard data...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error.message}</div>;
  }

  const chartData = {
    labels: ['Energy', 'Efficiency', 'Revenue', 'System Health'],
    datasets: [
      {
        label: 'Current Metrics',
        data: [
          energyLogs?.[0]?.value || 0,
          efficiencyData?.[0]?.score || 0,
          revenueData?.[0]?.amount || 0,
          systemHealthData?.[0]?.status === 'Good' ? 100 : 50, // Example mapping
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

  const renderTable = () => {
    switch (activeTab) {
      case 'Users':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">ID</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Name</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Email</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Role</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Activities</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">{user.id}</td>
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.role}</td>
                    <td className="py-3 px-4">{user.activities.map(activity => activity.message).join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'Energy Logs':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">ID</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Value (kWh)</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Timestamp</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-200">
                {energyLogs.map((log) => (
                  <tr key={log.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">{log.id}</td>
                    <td className="py-3 px-4">{log.value}</td>
                    <td className="py-3 px-4">{new Date(log.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'Efficiency Data':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">ID</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Score (%)</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Timestamp</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-200">
                {efficiencyData.map((data) => (
                  <tr key={data.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">{data.id}</td>
                    <td className="py-3 px-4">{data.score}</td>
                    <td className="py-3 px-4">{new Date(data.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'Revenue Data':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">ID</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Amount ($)</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Timestamp</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-200">
                {revenueData.map((data) => (
                  <tr key={data.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">{data.id}</td>
                    <td className="py-3 px-4">{data.amount}</td>
                    <td className="py-3 px-4">{new Date(data.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'System Health':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">ID</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Status</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">CPU Usage (%)</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Memory (%)</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Storage (%)</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Timestamp</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-200">
                {systemHealthData.map((data) => (
                  <tr key={data.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">{data.id}</td>
                    <td className="py-3 px-4">{data.status}</td>
                    <td className="py-3 px-4">{data.cpuUsage}</td>
                    <td className="py-3 px-4">{data.memory}</td>
                    <td className="py-3 px-4">{data.storage}</td>
                    <td className="py-3 px-4">{new Date(data.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'Activities':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">ID</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Message</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">User</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Timestamp</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-200">
                {activities.map((activity) => (
                  <tr key={activity.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">{activity.id}</td>
                    <td className="py-3 px-4">{activity.message}</td>
                    <td className="py-3 px-4">{activity.user?.name}</td>
                    <td className="py-3 px-4">{new Date(activity.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 text-gray-700 dark:text-gray-200">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard - Database View</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Database Tables</h2>
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
          {[ 'Users', 'Energy Logs', 'Efficiency Data', 'Revenue Data', 'System Health', 'Activities' ].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 -mb-px border-b-2 ${activeTab === tab ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {renderTable()}
      </div>
    </div>
  );
}
