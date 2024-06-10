"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import { MdInfo, MdOpenInNew } from "react-icons/md";
import Swal from "sweetalert2";

interface IProps {
  libro_descripcion: string;
}

const showBookDescription = (libro_descripcion: string) => {
  Swal.fire({
    customClass: plus_jakarta_sans.className,
    title: "Información del libro",
    text: libro_descripcion,
    icon: "info",
    confirmButtonText: "Cerrar",
  });
};

export default function ButtonMoreInfoBook({ libro_descripcion }: IProps) {
  return (
    <button
      className="btn btn-info btn-xs"
      style={{ marginRight: 10 }}
      onClick={() => showBookDescription(libro_descripcion)}
    >
      <MdInfo /> Más información&nbsp;
      <MdOpenInNew />
    </button>
  );
}
