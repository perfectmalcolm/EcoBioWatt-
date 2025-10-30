import React, { useEffect, useState } from 'react';
import { getFleetData } from '../services/api';
import DeliveryEfficiencyChart from '../components/DeliveryEfficiencyChart';

export default function Logistics() {
  const [fleetData, setFleetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFleet = async () => {
      try {
        const data = await getFleetData();
        setFleetData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFleet();
  }, []);

  if (loading) {
    return <div className="p-6 text-gray-700 dark:text-gray-200">Loading fleet data...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="p-6 text-gray-700 dark:text-gray-200">
      <h1 className="text-2xl font-bold mb-4">Fleet Tracking and Logistics</h1>
      <DeliveryEfficiencyChart fleetData={fleetData} />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">ID</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Vehicle</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Status</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Location</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Efficiency (%)</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">Driver</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-gray-600 dark:text-gray-300 text-left">ETA</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-200">
            {fleetData.map((fleet) => (
              <tr key={fleet.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-3 px-4">{fleet.id}</td>
                <td className="py-3 px-4">{fleet.vehicle}</td>
                <td className="py-3 px-4">{fleet.status}</td>
                <td className="py-3 px-4">{fleet.location}</td>
                <td className="py-3 px-4">{fleet.deliveryEfficiency}</td>
                <td className="py-3 px-4">{fleet.driver}</td>
                <td className="py-3 px-4">{new Date(fleet.eta).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}