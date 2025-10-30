export default function ActivityFeed({ activities }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 mt-8 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Recent Activity
      </h3>
      <ul className="space-y-3">
        {activities.map((act) => (
          <li key={act.id} className="border-b border-gray-200 dark:border-gray-800 pb-2">
            <p className="text-gray-700 dark:text-gray-300">{act.message}</p>
            <span className="text-xs text-gray-400">
              {new Date(act.createdAt).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
