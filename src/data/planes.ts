export const planes = [
  {
    marca: "Fiat",
    precio: "$613.999",
    modelo: "Cronos",
    version: "DRIVE 1.3L MT5 PACK PLUS",
    financiamiento: "Planes financiación en 84 cuotas",
    img: "/images/models/cronos.webp",
    slug: "cronos",
    precioVehiculo: 36429000,
    cuotas: 84,
    adminFactor: 1.2,
    planPercents: [70, 80, 90],
    cuotaDesdePorPlan: {
      70: "$482.999",
      80: "$0",
      90: "$613.999"
    },
    anticipoPorPlan: {
      70: "$10.899.999",
      80: "$6.899.999",
      90: "$6.899.999"
    },
    detalleCuotasPorPlan: {
      70: [
        { label: "Alicuota", value: "$303.575" },
        { label: "Cuota 1", value: "$1.100.500" },
        { label: "Cuota 2 a 13", value: "$483.267" },
        { label: "Cuota 14 a 18", value: "$367.265" },
        { label: "Cuota 19 a 42", value: "$388.749" },
        { label: "Cuota 43 a 84", value: "$367.265" }
      ],
      80: [
        { label: "Alicuota", value: "Consultar" },
        { label: "Cuota 1", value: "Consultar" },
        { label: "Cuota 2 a 13", value: "Consultar" },
        { label: "Cuota 14 a 18", value: "Consultar" },
        { label: "Cuota 19 a 42", value: "Consultar" },
        { label: "Cuota 43 a 84", value: "Consultar" }
      ],
      90: [
        { label: "Alicuota", value: "$390.311" },
        { label: "Cuota 1", value: "$1.100.500" },
        { label: "Cuota 2 a 13", value: "$614.528" },
        { label: "Cuota 14 a 84", value: "$464.496" }
      ]
    },
    detalleCuotas: [
      { label: "Alicuota", value: "$303.575" },
      { label: "Cuota 1", value: "$1.100.500" },
      { label: "Cuota 2 a 13", value: "$483.267" },
      { label: "Cuota 14 a 18", value: "$367.265" },
      { label: "Cuota 19 a 42", value: "$388.749" },
      { label: "Cuota 43 a 84", value: "$367.265" }
    ],
    specs: {
      motor: "FireFly 1.3 nafta, 4 cilindros, 8 válvulas",
      potencia: "99 CV @ 6.000 rpm",
      torque: "127 Nm @ 4.000 rpm",
      transmision: "Manual 5 velocidades",
      traccion: "Delantera",
      dim: "Sedán B; 0–100 km/h ~11.5 s; V. máx 174 km/h"
    }
  },
  {
    marca: "Fiat",
    precio: "$321.999",
    modelo: "Mobi",
    version: "1,0 EASY PACK TOP",
    financiamiento: "Planes financiación en 84 cuotas",
    img: "/images/models/mobi.webp",
    slug: "mobi",
    precioVehiculo: 26643000,
    cuotas: 84,
    adminFactor: 1.2,
    planPercents: [70, 80, 90],
    cuotaDesdePorPlan: {
      70: "$0",
      80: "$339.999",
      90: "$0"
    },
    anticipoPorPlan: {
      70: "$0",
      80: "$5.499.999",
      90: "$0"
    },
    detalleCuotas: [
      { label: "Alicuota", value: "$253.743" },
      { label: "Cuota 1", value: "$8.000.000" },
      { label: "Cuota 2 a 12", value: "$322.450" },
      { label: "Cuota 13 a 19", value: "$347.894" },
      { label: "Cuota 20 a 24", value: "$304.162" },
      { label: "Cuota 25 a 72", value: "$325.656" },
      { label: "Cuota 73 a 84", value: "$304.162" }
    ],
    specs: {
      motor: "Fire 1.0 nafta, 4 cilindros, 8 válvulas",
      potencia: "70 CV @ 6.250 rpm",
      torque: "94 Nm @ ~3.850 rpm",
      transmision: "Manual 5 velocidades",
      traccion: "Delantera",
      dim: "L 3.566 mm / W 1.633 mm / H 1.505 mm; Baúl 235 L"
    }
  },
  
  /*{
    marca: "Fiat",
    precio: "$375.209",
    modelo: "Argo",
    version: "ENDURANCE CD 1.4",
    financiamiento: "Planes financiación en 84 cuotas",
    img: "/images/models/argo.webp",
    slug: "argo",
    precioVehiculo: 37520900,
    cuotas: 84,
    adminFactor: 1.2,
    planPercents: [70, 90],
    cuotaDesdePorPlan: {
      70: "$375.209",
      80: "$0",
      90: "$0"
    },
    anticipoPorPlan: {
      70: "$0",
      80: "$0",
      90: "$0"
    },
    specs: {
      motor: "Fire 1.4 nafta, 4 cilindros, 8 válvulas",
      potencia: "87 CV @ 5.750 rpm",
      torque: "124 Nm @ 3.500 rpm",
      transmision: "Manual 5 velocidades",
      traccion: "Delantera",
      dim: "L 4.000 mm / W 1.710 mm / H 1.505 mm; Baúl 300 L"
    }
  },*/
];

const parseARS = (str: unknown)=> {
  try { return parseInt(String(str||'').replace(/[^0-9]/g,''), 10) || 0; } catch { return 0; }
};

for (const p of planes as any[]) {
  const percents: number[] = Array.isArray(p.planPercents) ? p.planPercents : [];
  const map = p.cuotaDesdePorPlan || {};
  const visible = percents.filter((pct)=> parseARS(map?.[pct]) > 0);
  if (visible.length > 0) p.planPercentsVisible = visible;
  const detalleDefault = Array.isArray(p.detalleCuotas) ? p.detalleCuotas : [];
  p.detalleCuotasPorPlan = p.detalleCuotasPorPlan || {};
  const targetPercents: number[] = Array.isArray(p.planPercentsVisible) && p.planPercentsVisible.length ? p.planPercentsVisible : percents;
  for (const pct of targetPercents) {
    if (!Array.isArray(p.detalleCuotasPorPlan[pct]) || p.detalleCuotasPorPlan[pct].length === 0) {
      p.detalleCuotasPorPlan[pct] = detalleDefault;
    }
  }
}

export function getDetalleCuotasForPlan(plane: any, percent: number){
  try {
    const map = plane?.detalleCuotasPorPlan;
    if (map && map[percent]) return map[percent];
    return plane?.detalleCuotas ?? [];
  } catch {
    return Array.isArray(plane?.detalleCuotas) ? plane.detalleCuotas : [];
  }
}
