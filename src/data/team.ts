export type TeamMember = {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  initials: string;
};

export const team: TeamMember[] = [
  {
    id: "camila-mendoza",
    name: "Dra. Camila Mendoza",
    role: "Societaria Fundadora",
    specialties: ["Derecho Corporativo", "Tributario"],
    initials: "CM",
  },
  {
    id: "javier-ortiz",
    name: "Dr. Javier Ortiz",
    role: "Director de Litigios",
    specialties: ["Derecho Penal", "Civil"],
    initials: "JO",
  },
  {
    id: "valentina-ruiz",
    name: "Dra. Valentina Ruiz",
    role: "Socia · Área Laboral",
    specialties: ["Derecho Laboral", "Previsional"],
    initials: "VR",
  },
  {
    id: "nicolas-ferreira",
    name: "Dr. Nicolás Ferreira",
    role: "Socio · Derecho Civil",
    specialties: ["Familia", "Sucesiones"],
    initials: "NF",
  },
  {
    id: "sofia-leiva",
    name: "Dra. Sofía Leiva",
    role: "Adjunta · Tributario",
    specialties: ["Impuestos", "Aduana"],
    initials: "SL",
  },
  {
    id: "matias-cabral",
    name: "Dr. Matías Cabral",
    role: "Adjunto · Corporativo",
    specialties: ["Inmobiliario", "Contratos"],
    initials: "MC",
  },
];

export const history = [
  {
    year: "1998",
    title: "Fundación del estudio",
    text: "La Dra. Camila Mendoza funda el estudio con el compromiso de ofrecer una atención jurídica cercana, ética y rigurosa.",
  },
  {
    year: "2006",
    title: "Creación del área corporativa",
    text: "Creamos el departamento de asesoramiento empresarial atendiendo la creciente demanda de pymes y startups.",
  },
  {
    year: "2014",
    title: "Premio a la excelencia profesional",
    text: "Somos reconocidos por colegios profesionales por nuestro trabajo en litigios complejos y mediación.",
  },
  {
    year: "2022",
    title: "Expansión del equipo",
    text: "Incorporamos nuevas áreas de especialización y fortalecemos la atención remota, manteniendo la cercanía de siempre.",
  },
];

export const values = [
  {
    title: "Ética",
    text: "Actuamos con absoluta transparencia, confidencialidad y respeto por el código profesional.",
  },
  {
    title: "Excelencia",
    text: "Preparación técnica continua; cada caso se estudia a fondo, sin improvisación.",
  },
  {
    title: "Cercanía",
    text: "Hablamos con claridad, en lenguaje accesible, y acompañamos cada paso de tu proceso.",
  },
  {
    title: "Compromiso",
    text: "Defendemos los intereses de nuestros clientes como si fueran propios.",
  },
];