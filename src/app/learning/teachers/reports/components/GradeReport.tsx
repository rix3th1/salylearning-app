"use client";

import { descargarCalificacionesReportePDF } from "@/services/reportes.service";
import { MdDownload } from "react-icons/md";
import { toast } from "sonner";

interface IProps {
  gradeSelected: string;
}

export default function GradeReport({ gradeSelected }: IProps) {
  const handleClickReport = async () => {
    if (gradeSelected === "") {
      toast("Seleccione su grado escolar");
      return;
    }

    toast.promise(descargarCalificacionesReportePDF(gradeSelected), {
      loading: "Descargando reporte...",
      async success(res) {
        const blob = await res.blob();
        const filename = `Salylearning-Reporte-Grado-${gradeSelected}-Calificaciones-Estudiantes-${
          new Date().toISOString().split("T")[0]
        }.pdf`;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.setAttribute("download", filename || "reporte.pdf");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        return "Reporte descargado correctamente!";
      },
      error(error) {
        if (error instanceof Error) {
          return error.message.replace(/,/g, ", ");
        }
      },
    });
  };

  return (
    <div
      className="col-md-12 text-center"
      style={{
        margin: "0.5rem 0",
      }}
    >
      <button
        type="button"
        className="btn btn-outline-primary btn-lg"
        onClick={handleClickReport}
      >
        Descargar reporte{" "}
        <MdDownload style={{ position: "relative", top: 2 }} />
      </button>
    </div>
  );
}
