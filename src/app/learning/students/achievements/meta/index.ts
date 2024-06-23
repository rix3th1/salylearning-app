import faroDelSaberLogro from "@/assets/farodelsaber.png";
import genioDelQuizLogro from "@/assets/geniodelquiz.png";
import genioEmergenteLogro from "@/assets/genioemergente.png";

export const chartsData = [
  { title: "Progreso en Lectura" },
  { title: "Preguntas Respondidas Correctamente" },
];

export const achievementsData = [
  { title: "Libros Leídos", unit: "unidades." },
  { title: "Preguntas Correctas", unit: "unidades." },
  { title: "Tiempo de Lectura (min)", unit: "minutos." },
];

export const medalsData = [
  {
    title: "Leer 10 libros",
    threshold: 10,
    noMedalText: "No se han logrado medallas de la generación emergente.",
    imgSrc: genioEmergenteLogro,
    alt: "Medalla 1",
  },
  {
    title: "Responder 100 preguntas correctamente",
    threshold: 100,
    noMedalText: "No se han logrado medallas del cuestionario de preguntas.",
    imgSrc: genioDelQuizLogro,
    alt: "Medalla 2",
  },
  {
    title: "Llevar más de 100 minutos de lectura",
    threshold: 100,
    noMedalText: "No se han logrado medallas del tiempo de lectura.",
    imgSrc: faroDelSaberLogro,
    alt: "Medalla 3",
  },
];
