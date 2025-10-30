import React, { useState } from 'react';

export default function UserInput() {
  const [energyValue, setEnergyValue] = useState('');
  const [message, setMessage] = useState('');
  const [submissionHistory, setSubmissionHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!energyValue) {
      setMessage('Please enter an energy value.');
      return;
    }

    const newSubmission = {
      id: Date.now(),
      value: parseFloat(energyValue),
      timestamp: new Date().toLocaleString(),
    };

    // Mock API call - in a real app, you'd send this data to a backend API
    console.log('Submitting Energy Value:', newSubmission.value);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call

    setSubmissionHistory((prevHistory) => [newSubmission, ...prevHistory]);
    setMessage(`Energy data ${newSubmission.value} kWh submitted successfully!`);
    setEnergyValue('');
  };

  const totalEntries = submissionHistory.length;
  const averageValue = totalEntries > 0 
    ? (submissionHistory.reduce((sum, entry) => sum + entry.value, 0) / totalEntries).toFixed(2)
    : 0;

  return (
    <div className="p-6 text-gray-700 dark:text-gray-200">
      <h1 className="text-2xl font-bold mb-4">User Data Input & Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-gray-500 dark:text-gray-400">Total Submissions</p>
          <p className="text-4xl font-bold text-emerald-600 mt-2">{totalEntries}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-gray-500 dark:text-gray-400">Average Value (kWh)</p>
          <p className="text-4xl font-bold text-emerald-600 mt-2">{averageValue}</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Submit New Energy Reading</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="energyValue" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Energy Value (kWh)</label>
            <input
              type="number"
              id="energyValue"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={energyValue}
              onChange={(e) => setEnergyValue(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Submit Energy Data
          </button>
        </form>
        {message && <p className="mt-4 text-green-600 dark:text-green-400">{message}</p>}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Submission History</h2>
        {submissionHistory.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No data submitted yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {submissionHistory.map((submission) => (
              <li key={submission.id} className="py-3 flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">{submission.value} kWh</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{submission.timestamp}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}