"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import { MdHelpOutline, MdThumbUp } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const showHelpSwal = () => {
  withReactContent(Swal).fire({
    customClass: plus_jakarta_sans.className,
    title: "Ayuda del sistema",
    width: 800,
    text: "¡Bienvenidos! En el menú, encontrarán una variedad emocionante de actividades diseñadas especialmente para ayudarlos a mejorar sus habilidades de lectura. Desde cuentos interactivos hasta desafíos divertidos, cada opción está aquí para hacer que su experiencia sea educativa y entretenida. No duden en explorar y descubrir nuevas aventuras literarias.",
    icon: "info",
    confirmButtonColor: "#e21e80",
    confirmButtonText: (
      <>
        <MdThumbUp /> &nbsp; De acuerdo
      </>
    ),
  });
};

export default function HelpButton() {
  return (
    <li
      className="tooltips-general"
      data-tooltip-id="tooltip-navbar-actions"
      data-tooltip-content="Ayuda"
      onClick={showHelpSwal}
    >
      <MdHelpOutline style={{ fontSize: 25, marginTop: 15 }} />
    </li>
  );
}
