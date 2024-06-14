"use client";

import { useRouter } from "next-nprogress-bar";
import { MdSchedule } from "react-icons/md";
import {
  showSwalRespuestasCuestionario,
  showSwalcalificarCuestionario,
} from "./calificar-cuestionario";

interface IProps {
  id_cuestionario: string;
  estadoCuestionario: "COMPLETADO" | "PENDIENTE" | "NO_LOGRADO";
  calificacion: any;
  cuestionario?: any;
}

export default function BotonCalificar({
  id_cuestionario,
  calificacion,
  estadoCuestionario,
  cuestionario,
}: IProps) {
  const router = useRouter();

  const handleClickCalificar = async () => {
    if (calificacion) {
      return;
    }

    if (estadoCuestionario === "COMPLETADO") {
      const result = await showSwalRespuestasCuestionario({
        cuestionario,
      });

      if (result.isConfirmed) {
        await showSwalcalificarCuestionario({ id_cuestionario });
      }
    }

    if (estadoCuestionario === "NO_LOGRADO") {
      await showSwalcalificarCuestionario({ id_cuestionario });
    }

    router.refresh();
  };

  return (
    <button
      className={`btn btn-lg btn-${
        estadoCuestionario === "COMPLETADO"
          ? "success"
          : estadoCuestionario === "PENDIENTE"
          ? "warning"
          : "danger"
      }`}
      onClick={handleClickCalificar}
    >
      {calificacion || (
        <>
          <MdSchedule style={{ position: "relative", top: 2 }} />
          <span style={{ fontSize: "0.8rem" }}> Calificar</span>
        </>
      )}
    </button>
  );
}
