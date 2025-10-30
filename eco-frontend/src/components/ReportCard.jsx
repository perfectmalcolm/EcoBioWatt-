import React from 'react';

export default function ReportCard({ title, value, unit, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex-1 min-w-[200px]">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
        {value} {unit}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
