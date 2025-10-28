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
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSensor, setNewSensor] = useState({
    name: "",
    region: "",
    latitude: "",
    longitude: "",
    value: 50,
  });

  const handleSelectSensor = (sensor) => setSelectedSensor(sensor);
  const handleCloseDetail = () => setSelectedSensor(null);

  const handleAddSensor = () => setShowAddForm(true);
  const handleCloseForm = () => setShowAddForm(false);

  const handleSaveSensor = () => {
    if (!newSensor.name || !newSensor.region) return alert("Completa los datos");

    const id = Date.now().toString();
    const sensor = {
      id,
      name: newSensor.name,
      region: newSensor.region,
      location: {
        latitude: parseFloat(newSensor.latitude),
        longitude: parseFloat(newSensor.longitude),
      },
      value: parseFloat(newSensor.value),
      lastUpdate: new Date().toISOString(),
      machine: {
        type: "Máquina tipo A",
        inactivityHours: 0,
        components: {
          filtro1: { hoursUsed: 0, lastChange: "2025-01-01", maxHours: 100 },
          filtroPapel: { hoursUsed: 0, lastChange: "2025-01-01", maxHours: 10 },
          aceite: { hoursUsed: 0, lastChange: "2025-01-01", maxHours: 1000 },
          filtro2: { hoursUsed: 0, lastChange: "2025-01-01", maxHours: 25 },
        },
      },
    };

    setSensors((prev) => [...prev, { ...sensor, status: determineStatus(sensor.value) }]);
    setNewSensor({ name: "", region: "", latitude: "", longitude: "", value: 50 });
    setShowAddForm(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <Header />

      {/* Botón para agregar sede */}
      <div className="text-center mt-4">
        <button
          onClick={handleAddSensor}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          ➕ Agregar nueva sede
        </button>
      </div>

      {/* Contenido principal */}
      <main className="flex-grow flex flex-col lg:flex-row justify-center items-stretch gap-6 px-6 py-6 container mx-auto max-w-7xl">
        <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:h-[70vh] rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white">
          <ChileMap sensors={sensors} onSelectSensor={handleSelectSensor} />
        </div>

        <div className="w-full lg:w-1/2 lg:h-[70vh] rounded-3xl overflow-y-auto border border-gray-200 shadow-lg bg-white">
          <SensorAlerts sensors={sensors} onSelectSensor={handleSelectSensor} />
        </div>
      </main>

      {/* Panel flotante de detalle */}
      {selectedSensor && (
        <SensorDetail sensor={selectedSensor} onClose={handleCloseDetail} />
      )}

      {/* Modal agregar sede */}
      {showAddForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
            <h2 className="text-xl font-semibold mb-4">Agregar nueva sede</h2>

            <input
              type="text"
              placeholder="Nombre"
              value={newSensor.name}
              onChange={(e) => setNewSensor({ ...newSensor, name: e.target.value })}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="text"
              placeholder="Región"
              value={newSensor.region}
              onChange={(e) => setNewSensor({ ...newSensor, region: e.target.value })}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="number"
              placeholder="Latitud"
              value={newSensor.latitude}
              onChange={(e) => setNewSensor({ ...newSensor, latitude: e.target.value })}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="number"
              placeholder="Longitud"
              value={newSensor.longitude}
              onChange={(e) => setNewSensor({ ...newSensor, longitude: e.target.value })}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="number"
              placeholder="Valor inicial"
              value={newSensor.value}
              onChange={(e) => setNewSensor({ ...newSensor, value: e.target.value })}
              className="w-full p-2 mb-4 border rounded"
            />

            <div className="flex justify-end gap-3">
              <button onClick={handleCloseForm} className="px-4 py-2 bg-gray-200 rounded-lg">
                Cancelar
              </button>
              <button onClick={handleSaveSensor} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
