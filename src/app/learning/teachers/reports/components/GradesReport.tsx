"use client";

import { obtenerGrados } from "@/services/grados.service";
import { descargarCalificacionesReportePDF } from "@/services/reportes.service";
import { THandleChange } from "@/types";
import { useEffect, useState } from "react";
import { MdDownload } from "react-icons/md";
import { toast } from "sonner";

export default function GradesReport() {
  const [grados, setGrados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gradoSelected, setGradoSelected] = useState("");

  const handleChange = (e: THandleChange) => {
    setGradoSelected(e.target.value);
  };

  const handleClickReport = async () => {
    if (gradoSelected === "") {
      toast("Seleccione su grado escolar");
      return;
    }

    toast.promise(descargarCalificacionesReportePDF(gradoSelected), {
      loading: "Descargando reporte...",
      async success(res) {
        const blob = await res.blob();
        const filename = `Salylearning-Reporte-Grado-${gradoSelected}-Calificaciones-Estudiantes-${
          new Date().toISOString().split("T")[0]
        }.pdf`;
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename || "reporte.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return "Reporte descargado correctamente!";
      },
      error(error) {
        if (error instanceof Error) {
          return error.message.replace(/,/g, ", ");
        }
      },
      finally() {
        setIsLoading(false);
      },
    });
  };

  useEffect(() => {
    setIsLoading(true);
    toast.promise(obtenerGrados, {
      loading: "Cargando grados...",
      success(data) {
        setGrados(data);
        return "Listo";
      },
      error(error) {
        if (error instanceof Error) {
          return error.message.replace(/,/g, ", ");
        }
      },
      finally() {
        setIsLoading(false);
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="col-md-6 text-center">
        <select
          name="id_grado"
          id="id_grado"
          className="form-control"
          required
          onChange={handleChange}
          disabled={isLoading}
          value={gradoSelected}
        >
          <option value="" disabled>
            Seleccione su grado escolar
          </option>
          {grados.map((grado: any) => (
            <option key={grado.id} value={grado.id}>
              {grado.nom_grado}
            </option>
          ))}
        </select>
      </div>

      <div
        className="col-md-12 text-center"
        style={{
          marginTop: "0.5rem",
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
    </>
  );
}
