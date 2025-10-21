import React from "react";

const SensorDetail = ({ sensor, onClose }) => {
  if (!sensor) return null;

  const colorMap = {
    critical: { bg: "bg-red-100", text: "text-red-700", icon: "⚠️" },
    warning: { bg: "bg-yellow-100", text: "text-yellow-700", icon: "🟡" },
    normal: { bg: "bg-green-100", text: "text-green-700", icon: "✅" },
  };

  const color = colorMap[sensor.status] || colorMap.normal;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fade-in z-[9999]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl p-8 shadow-2xl max-w-lg w-full relative slide-up z-[10000]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-full ${color.bg} text-2xl`}>
            {color.icon}
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">{sensor.name}</h3>
            <p className={`text-lg font-semibold ${color.text}`}>
              Estado: {sensor.status.toUpperCase()}
            </p>
          </div>
        </div>

        <div className="space-y-3 text-gray-700">
          <p>
            <strong>📍 Región:</strong> {sensor.region}
          </p>
          <p>
            <strong>📈 Nivel:</strong> {sensor.value}%
          </p>
          <p>
            <strong>⏰ Última actualización:</strong>{" "}
            {new Date(sensor.lastUpdate).toLocaleString("es-CL")}
          </p>

          {sensor.status === "critical" && (
            <div className="bg-red-50 border border-red-300 text-red-800 p-4 rounded-xl">
              ⚠️ Requiere mantenimiento inmediato.
            </div>
          )}
          {sensor.status === "warning" && (
            <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 p-4 rounded-xl">
              ⚠️ Nivel bajo. Revisar pronto.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SensorDetail;
