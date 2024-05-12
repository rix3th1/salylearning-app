"use client";

import { signOut } from "next-auth/react";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import Swal from "sweetalert2";

const showSignOutSwal = () => {
  Swal.fire({
    title: "¿Estás seguro de que quieres salir?",
    showCancelButton: true,
    confirmButtonText: "Sí, salir",
    cancelButtonText: "Cancelar",
    icon: "question",
  }).then((result) => result.isConfirmed && signOut());
};

export default function PowerButton() {
  return (
    <li
      className="tooltips-general"
      title="Salir del sistema"
      onClick={showSignOutSwal}
    >
      <MdOutlinePowerSettingsNew style={{ fontSize: 25, marginTop: 15 }} />
    </li>
  );
}
