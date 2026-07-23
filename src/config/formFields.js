export const VEHICLE_FIELDS = [
  {
    name: "marca",
    label: "Marca",
    type: "text",
    required: true,
  },
  {
    name: "modelo",
    label: "Modelo",
    type: "text",
    required: true,
  },
  {
    name: "version",
    label: "Versión",
    type: "text",
    required: false,
  },
  {
    name: "anio",
    label: "Año",
    type: "number",
    required: true,
  },
  {
    name: "patente",
    label: "Patente (opcional)",
    type: "text",
    required: false,
  },
];

export const CLIENT_FIELDS = [
  {
    name: "nombre",
    label: "Nombre",
    type: "text",
    required: true,
  },
  {
    name: "apellido",
    label: "Apellido",
    type: "text",
    required: true,
  },
  {
    name: "dni",
    label: "DNI",
    type: "text",
    required: true,
  },
  {
    name: "celular",
    label: "Celular",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
];