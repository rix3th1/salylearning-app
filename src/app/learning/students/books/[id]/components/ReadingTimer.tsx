"use client";

import {
  actualizarLibroEstudiante,
  obtenerLibroEstudiante,
} from "@/services/libro-estudiante.service";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface IProps {
  id_libro_estudiante: string;
}

export default function ReadingTimer({ id_libro_estudiante }: IProps) {
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    toast.promise(obtenerLibroEstudiante(id_libro_estudiante), {
      loading: "Cargando tiempo de lectura...",
      success(data) {
        setMinutes(data.tiempo_lectura);
        return "Listo";
      },
      error(error) {
        if (error instanceof Error) {
          return error.message.replace(/,/g, ", ");
        }
      },
    });

    const interval = setInterval(() => {
      setMinutes((prevMinutes) => {
        actualizarLibroEstudiante(id_libro_estudiante, {
          terminado: false,
          tiempo_lectura: prevMinutes + 1,
        });
        return prevMinutes + 1;
      });
    }, 60000); // 60000ms = 1 minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h2 className="text-muted" style={{ fontSize: "1rem" }}>
        Tiempo de lectura: {minutes} minutos.
      </h2>
    </div>
  );
}
