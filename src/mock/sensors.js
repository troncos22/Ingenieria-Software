// 🧠 Datos de ejemplo con máquina completa para cada sede

export const defaultSensors = [
  {
    id: "1",
    name: "Central Metropolitana (Santiago)",
    region: "Metropolitana",
    location: { latitude: -33.45, longitude: -70.67 },
    value: 85,
    lastUpdate: "2025-07-20T11:10:00Z",
    machine: {
      type: "Máquina tipo A",
      inactivityHours: 12,
      components: {
        filtro1: { hoursUsed: 80, lastChange: "2025-07-01", maxHours: 100 },
        filtroPapel: { hoursUsed: 8, lastChange: "2025-10-01", maxHours: 10 },
        aceite: { hoursUsed: 900, lastChange: "2025-02-15", maxHours: 1000 },
        filtro2: { hoursUsed: 20, lastChange: "2025-09-15", maxHours: 25 },
      },
    },
  },
  {
    id: "2",
    name: "Central Biobío (Concepción)",
    region: "Biobío",
    location: { latitude: -36.82, longitude: -73.05 },
    value: 45,
    lastUpdate: "2025-07-20T09:45:00Z",
    machine: {
      type: "Máquina tipo A",
      inactivityHours: 30,
      components: {
        filtro1: { hoursUsed: 60, lastChange: "2025-07-10", maxHours: 100 },
        filtroPapel: { hoursUsed: 5, lastChange: "2025-10-15", maxHours: 10 },
        aceite: { hoursUsed: 400, lastChange: "2025-04-05", maxHours: 1000 },
        filtro2: { hoursUsed: 12, lastChange: "2025-09-01", maxHours: 25 },
      },
    },
  },
  {
    id: "3",
    name: "Central Los Lagos (Puerto Montt)",
    region: "Los Lagos",
    location: { latitude: -41.47, longitude: -72.94 },
    value: 20,
    lastUpdate: "2025-07-20T11:50:00Z",
    machine: {
      type: "Máquina tipo A",
      inactivityHours: 18,
      components: {
        filtro1: { hoursUsed: 90, lastChange: "2025-06-01", maxHours: 100 },
        filtroPapel: { hoursUsed: 9, lastChange: "2025-10-10", maxHours: 10 },
        aceite: { hoursUsed: 850, lastChange: "2025-03-22", maxHours: 1000 },
        filtro2: { hoursUsed: 22, lastChange: "2025-09-05", maxHours: 25 },
      },
    },
  },
  {
    id: "4",
    name: "Central Coquimbo (La Serena)",
    region: "Coquimbo",
    location: { latitude: -29.9, longitude: -71.25 },
    value: 65,
    lastUpdate: "2025-07-20T10:05:00Z",
    machine: {
      type: "Máquina tipo A",
      inactivityHours: 5,
      components: {
        filtro1: { hoursUsed: 40, lastChange: "2025-08-15", maxHours: 100 },
        filtroPapel: { hoursUsed: 7, lastChange: "2025-10-05", maxHours: 10 },
        aceite: { hoursUsed: 500, lastChange: "2025-05-10", maxHours: 1000 },
        filtro2: { hoursUsed: 17, lastChange: "2025-09-22", maxHours: 25 },
      },
    },
  },
  {
    id: "5",
    name: "Central Antofagasta",
    region: "Antofagasta",
    location: { latitude: -23.65, longitude: -70.4 },
    value: 90,
    lastUpdate: "2025-07-20T09:15:00Z",
    machine: {
      type: "Máquina tipo A",
      inactivityHours: 8,
      components: {
        filtro1: { hoursUsed: 95, lastChange: "2025-06-28", maxHours: 100 },
        filtroPapel: { hoursUsed: 10, lastChange: "2025-10-12", maxHours: 10 },
        aceite: { hoursUsed: 980, lastChange: "2025-01-20", maxHours: 1000 },
        filtro2: { hoursUsed: 25, lastChange: "2025-09-10", maxHours: 25 },
      },
    },
  },
  {
    id: "6",
    name: "Central Magallanes (Punta Arenas)",
    region: "Magallanes",
    location: { latitude: -53.16, longitude: -70.9 },
    value: 25,
    lastUpdate: "2025-07-20T11:30:00Z",
    machine: {
      type: "Máquina tipo A",
      inactivityHours: 40,
      components: {
        filtro1: { hoursUsed: 85, lastChange: "2025-07-05", maxHours: 100 },
        filtroPapel: { hoursUsed: 6, lastChange: "2025-10-03", maxHours: 10 },
        aceite: { hoursUsed: 930, lastChange: "2025-02-01", maxHours: 1000 },
        filtro2: { hoursUsed: 23, lastChange: "2025-09-12", maxHours: 25 },
      },
    },
  },
];
