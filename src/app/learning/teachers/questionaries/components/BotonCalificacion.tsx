"use client";

import { EstadoCuestionario } from "@/services/contadores.service";
import { useRouter } from "next-nprogress-bar";
import { MdSchedule } from "react-icons/md";
import {
  showSwalCalificacion,
  showSwalRetroalimentacion,
} from "./calificar-cuestionario";

interface IProps {
  id_cuestionario: string;
  estadoCuestionario: EstadoCuestionario;
  calificacion: any;
  cuestionario?: any;
}

export default function BotonCalificacion({
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

    if (estadoCuestionario === EstadoCuestionario.COMPLETADO) {
      const result = await showSwalCalificacion({
        cuestionario,
      });

      const calificacion = result.value;

      if (result.isConfirmed) {
        await showSwalRetroalimentacion({ id_cuestionario, calificacion });
      }
    }

    if (estadoCuestionario === EstadoCuestionario.NO_LOGRADO) {
      await showSwalRetroalimentacion({ id_cuestionario, calificacion: 0 });
    }

    router.refresh();
  };

  return (
    <button
      className={`btn btn-${
        estadoCuestionario === EstadoCuestionario.COMPLETADO
          ? "success"
          : estadoCuestionario === EstadoCuestionario.PENDIENTE
          ? "warning"
          : "danger"
      }`}
      onClick={handleClickCalificar}
    >
      {calificacion ? (
        Number(calificacion).toFixed(1)
      ) : (
        <>
          <MdSchedule style={{ position: "relative", top: 1 }} />
          <span style={{ fontSize: "0.8rem" }}> Publicar calificación</span>
        </>
      )}
    </button>
  );
}
