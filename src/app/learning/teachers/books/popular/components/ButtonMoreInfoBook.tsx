"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import { MdInfo, MdOpenInNew } from "react-icons/md";
import Swal from "sweetalert2";

interface IProps {
  libro_descripcion: string;
}

const showBookDescription = (libro_descripcion: string) => {
  Swal.fire({
    customClass: { container: plus_jakarta_sans.className },
    title: "Información del libro",
    text: libro_descripcion,
    icon: "info",
    confirmButtonColor: "#e21e80",
  });
};

export default function ButtonMoreInfoBook({ libro_descripcion }: IProps) {
  return (
    <button
      className="btn btn-info btn-xs"
      style={{ marginRight: 10 }}
      onClick={() => showBookDescription(libro_descripcion)}
    >
      <MdInfo style={{ position: "relative", top: 1, marginRight: 5 }} /> Más
      información&nbsp;
      <MdOpenInNew style={{ position: "relative", top: 2, marginLeft: 5 }} />
    </button>
  );
}
