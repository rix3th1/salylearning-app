import {
  MdAssignmentInd,
  MdBookmarkBorder,
  MdCalendarMonth,
  MdLibraryBooks,
  MdOutlineRestore,
  MdPeople,
  MdTrendingUp,
} from "react-icons/md";

export const tilesData = [
  {
    icon: MdPeople,
    name: "Grados",
    link: "/learning/teachers/reports",
    counterIndex: 0,
    noDataText: "Ninguno.",
  },
  {
    icon: MdLibraryBooks,
    name: "Libros",
    link: "/learning/teachers/books/new",
    counterIndex: 1,
    noDataText: "No hay libros.",
  },
  {
    icon: MdBookmarkBorder,
    name: "Géneros literarios",
    link: "/learning/teachers/books/popular",
    counterIndex: 2,
    noDataText: "Ninguno.",
  },
  {
    icon: MdAssignmentInd,
    name: "Preguntas pendientes",
    link: "/learning/teachers/questionaries/pending",
    counterIndex: 3,
  },
  {
    icon: MdOutlineRestore,
    name: "Cuestionarios no logrados",
    link: "/learning/teachers/questionaries/not-achieved",
    counterIndex: 4,
  },
  {
    icon: MdCalendarMonth,
    name: "Cuestionarios completados",
    link: "/learning/teachers/questionaries/completed",
    counterIndex: 5,
  },
  {
    icon: MdTrendingUp,
    name: "Reportes y Estadísticas",
    link: "/learning/teachers/statistics",
    counterIndex: null,
  },
];
