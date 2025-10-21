import React from "react";

const SensorAlerts = ({ sensors, onSelectSensor }) => {
  const formatDate = (d) => new Date(d).toLocaleString("es-CL", { hour12: false });
  const categories = {
    critical: { title: "Críticas", color: "red", icon: "⚠️" },
    warning: { title: "Advertencias", color: "yellow", icon: "🟡" },
    normal: { title: "Normales", color: "green", icon: "✅" },
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl h-full overflow-y-auto fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">🔔 Alertas</h2>

      {Object.entries(categories).map(([status, info]) => {
        const filtered = sensors.filter((s) => s.status === status);
        if (filtered.length === 0) return null;

        return (
          <div
            key={status}
            className={`mb-6 p-4 bg-${info.color}-50 border border-${info.color}-200 rounded-xl`}
          >
            <h3 className={`text-xl font-semibold text-${info.color}-600 mb-3`}>
              {info.icon} {info.title}
            </h3>
            {filtered.map((s) => (
              <div
                key={s.id}
                className={`bg-${info.color}-100 border border-${info.color}-300 rounded-lg p-3 mb-2 cursor-pointer hover:bg-${info.color}-200`}
                onClick={() => onSelectSensor(s)}
              >
                <p className={`font-bold text-${info.color}-700`}>{s.name}</p>
                <p className={`text-${info.color}-600 text-sm`}>Nivel: {s.value}%</p>
                <p className={`text-xs text-${info.color}-500`}>
                  Última actualización: {formatDate(s.lastUpdate)}
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SensorAlerts;
