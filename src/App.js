import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChileMap from "./components/ChileMap";
import SensorAlerts from "./components/SensorAlerts";
import SensorDetail from "./components/SensorDetail";
import { defaultSensors } from "./mock/sensors";
import "./App.css";

// 🧠 Determina el estado según el valor
const determineStatus = (value) => {
  if (value < 30) return "critical";
  if (value < 60) return "warning";
  return "normal";
};

// 🔁 Aplica el estado dinámico a los sensores
const applyStatusToSensors = (sensorList) =>
  sensorList.map((s) => ({ ...s, status: determineStatus(s.value) }));

const App = () => {
  const [sensors, setSensors] = useState(applyStatusToSensors(defaultSensors));
  const [selectedSensor, setSelectedSensor] = useState(null);

  const handleSelectSensor = (sensor) => setSelectedSensor(sensor);
  const handleCloseDetail = () => setSelectedSensor(null);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <Header />

      {/* 🧭 Contenido principal responsivo */}
      <main className="flex-grow flex flex-col lg:flex-row justify-center items-stretch gap-6 px-6 py-6 container mx-auto max-w-7xl">
        {/* 🗺️ Mapa */}
        <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:h-[70vh] rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white">
          <ChileMap sensors={sensors} onSelectSensor={handleSelectSensor} />
        </div>

        {/* ⚠️ Panel de alertas */}
        <div className="w-full lg:w-1/2 lg:h-[70vh] rounded-3xl overflow-y-auto border border-gray-200 shadow-lg bg-white">
          <SensorAlerts sensors={sensors} onSelectSensor={handleSelectSensor} />
        </div>
      </main>

      {/* 🪟 Panel flotante del detalle del sensor */}
      {selectedSensor && (
        <SensorDetail sensor={selectedSensor} onClose={handleCloseDetail} />
      )}

      <Footer />
    </div>
  );
};

export default App;
