import "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Dashboard({ data }) {
  const chartData = {
    labels: data.energy.map((e) =>
      new Date(e.timestamp).toLocaleTimeString("en-KE", { hour: "2-digit", minute: "2-digit" })
    ),
    datasets: [
      {
        label: "Energy Usage (kWh)",
        data: data.energy.map((e) => e.value),
        borderColor: "#16a34a",
        backgroundColor: "rgba(22, 163, 74, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const cards = [
    { title: "Energy", value: `${data.energy.length} logs`, color: "bg-green-100 text-green-700" },
    { title: "Efficiency", value: `${data.efficiency.length} entries`, color: "bg-yellow-100 text-yellow-700" },
    { title: "Revenue", value: `${data.revenue.length} records`, color: "bg-blue-100 text-blue-700" },
    { title: "Health", value: `${data.health.length} checks`, color: "bg-red-100 text-red-700" },
  ];

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.color} p-5 rounded-xl shadow text-center font-semibold`}
          >
            <h3 className="text-lg">{card.title}</h3>
            <p className="text-2xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow">
        <h3 className="text-lg font-semibold mb-4">Energy Usage Trends</h3>
        <Line data={chartData} />
      </div>
    </div>
  );
}
