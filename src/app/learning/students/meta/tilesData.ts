import { MdBarChart, MdMenuBook, MdTrendingUp } from "react-icons/md";

export const tilesData = [
  {
    icon: MdMenuBook,
    name: "Mis libros",
    link: "/learning/students/books",
    counterIndex: 0,
    noDataText: "Ninguno.",
  },
  {
    icon: MdBarChart,
    name: "¡Enfréntate a los Retos!",
    link: "/learning/students/activities/pending",
    counterIndex: 1,
    noDataText: "No hay retos pendientes!",
  },
  {
    icon: MdTrendingUp,
    name: "Logros",
    link: "/learning/students/achievements",
    counterIndex: 2,
  },
];
