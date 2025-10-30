export default function SystemHealth({ health }) {
  if (!health) return null;

  return (
    <div className="bg-white dark:bg-gray-900 p-6 mt-8 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        System Health
      </h3>
      {["cpuUsage", "memory", "storage"].map((key) => (
        <div key={key} className="mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
            {key.replace(/([A-Z])/g, " $1")}
          </p>
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 mt-1">
            <div
              className="bg-emerald-600 h-3 rounded-full"
              style={{ width: `${health[key]}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
