import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// 🔧 Corregir íconos por defecto de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const ChileMap = ({ sensors, onSelectSensor }) => {
  const chileBounds = L.latLngBounds(L.latLng(-56, -76), L.latLng(-17, -66));
  const [hoveredSensor, setHoveredSensor] = useState(null);

  // 📍 Control de vista del mapa (animación opcional)
  const MapViewUpdater = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      if (center) map.flyTo(center, 6, { duration: 1 });
    }, [center]);
    return null;
  };

  return (
    <div className="rounded-3xl border border-gray-200 shadow-xl overflow-hidden h-[600px] relative z-0">
      <MapContainer
        center={[-35.6751, -71.543]}
        zoom={5}
        minZoom={4.5}
        maxZoom={10}
        maxBounds={chileBounds}
        maxBoundsViscosity={1.0}
        style={{ width: "100%", height: "100%", zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {sensors.map((s) => (
          <Marker
            key={s.id}
            position={[s.location.latitude, s.location.longitude]}
            eventHandlers={{
              click: () => onSelectSensor(s),
              mouseover: () => setHoveredSensor(s.id),
              mouseout: () => setHoveredSensor(null),
            }}
          >
            {/* 🧠 Popup pequeño solo al pasar el mouse */}
            {hoveredSensor === s.id && (
              <Popup autoClose={false} closeButton={false} className="!z-[5000]">
                <div className="text-sm">
                  <strong>{s.name}</strong>
                  <br />
                  Estado:{" "}
                  <span
                    className={`font-semibold ${
                      s.status === "critical"
                        ? "text-red-600"
                        : s.status === "warning"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {s.status.toUpperCase()}
                  </span>
                  <br />
                  Nivel: {s.value}%
                </div>
              </Popup>
            )}
          </Marker>
        ))}

        <MapViewUpdater />
      </MapContainer>
    </div>
  );
};

export default ChileMap;
