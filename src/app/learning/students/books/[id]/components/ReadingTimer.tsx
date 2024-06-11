"use client";

import {
  actualizarLibroEstudiante,
  obtenerLibroEstudiante,
} from "@/services/libro-estudiante.service";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import "./styles.css";
import confetti from "canvas-confetti";

interface IProps {
  id_libro_estudiante: string;
  libro: any;
}

export default function ReadingTimer({ id_libro_estudiante, libro }: IProps) {
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
          tiempo_lectura: prevMinutes + 1,
        });
        return prevMinutes + 1;
      });
    }, 60000); // 60000ms = 1 minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section>
      <div>
        <h2 className="text-muted" style={{ fontSize: "1rem" }}>
          Tiempo de lectura: {minutes} minutos.
        </h2>
      </div>

      <video
        id="myVideo"
        className="custom-card"
        controls
        autoPlay
        muted
        controlsList="nodownload noremoteplayback"
        style={{
          marginBottom: "5rem",
        }}
        onEnded={() => {
          actualizarLibroEstudiante(id_libro_estudiante, {
            terminado: true,
          });
          confetti();
          toast.success("¡Lectura terminada!");
        }}
      >
        <source src={libro.video_libro} type="video/mp4" />
      </video>
    </section>
  );
}
