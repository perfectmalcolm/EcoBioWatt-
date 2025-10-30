export default function OverviewCards({ data }) {
  const cards = [
    { label: "Energy", value: data.energy?.[0]?.value || 0, unit: "kWh" },
    { label: "Efficiency", value: data.efficiency?.[0]?.score || 0, unit: "%" },
    { label: "Revenue", value: data.revenue?.[0]?.amount || 0, unit: "$" },
    { label: "Health", value: data.health?.[0]?.status || "N/A", unit: "" },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {card.label}
          </p>
          <h3 className="text-3xl font-bold text-emerald-600 mt-2">
            {card.value} {card.unit}
          </h3>
        </div>
      ))}
    </section>
  );
}
