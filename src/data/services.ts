export type Service = {
  id: string;
  title: string;
  description: string;
  keywords: string[];
};

export const services: Service[] = [
  {
    id: "civil",
    title: "Derecho Civil",
    description:
      "Asesoramiento y representación en contratos, responsabilidad civil, daños y perjuicios, y reclamaciones entre particulares.",
    keywords: ["Contratos", "Daños", "Responsabilidad civil"],
  },
  {
    id: "penal",
    title: "Derecho Penal",
    description:
      "Defensa penal estratégica y basada en la confidencialidad, desde la etapa de instrucción hasta la ejecución de la pena.",
    keywords: ["Defensa", "Querellas", "Juicios orales"],
  },
  {
    id: "laboral",
    title: "Derecho Laboral",
    description:
      "Defensa de trabajadores y empleadores en conflictos individuales y colectivos, despidos, indemnizaciones y accidentes de trabajo.",
    keywords: ["Despidos", "Indemnizaciones", "ART"],
  },
  {
    id: "corporativo",
    title: "Derecho Corporativo",
    description:
      "Asesoramiento integral a empresas: constitución de sociedades, contratos comerciales, compliance y due diligence.",
    keywords: ["Sociedades", "M&A", "Compliance"],
  },
  {
    id: "familia",
    title: "Derecho de Familia",
    description:
      "Acompañamiento en divorcios, régimen de comunicación filial, alimentos, adopciones y acuerdos prenupciales.",
    keywords: ["Divorcios", "Alimentos", "Adopciones"],
  },
  {
    id: "tributario",
    title: "Derecho Tributario",
    description:
      "Planificación fiscal y defensa ante organismos de recaudación, impugnaciones y recupero de créditos fiscales.",
    keywords: ["Impuestos", "AFIP", "Planificación fiscal"],
  },
  {
    id: "inmobiliario",
    title: "Derecho Inmobiliario",
    description:
      "Compraventas, alquileres comerciales, condominios y resolución de conflictos por propiedad y dominio.",
    keywords: ["Compraventas", "Alquileres", "Sociedades"],
  },
  {
    id: "sucesiones",
    title: "Sucesiones",
    description:
      "Gestión completa de sucesiones y testamentos, partición de bienes y resolución de conflictos hereditarios.",
    keywords: ["Testamentarias", "Partición", "Aceptación de herencia"],
  },
  {
    id: "mediacion",
    title: "Mediación y Arbitraje",
    description:
      "Resolución alternativa de conflictos para evitar juicios largos y costosos, con foco en alcanzar acuerdos duraderos.",
    keywords: ["MASC", "Acuerdos", "Arbitrajes"],
  },
];