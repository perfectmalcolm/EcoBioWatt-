import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function ChartPanel({ data }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 mt-8 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Energy Usage Trends
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" tick={{ fill: "#9CA3AF" }} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
