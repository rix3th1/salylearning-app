import { fetchClient } from "./api.service";

export async function descargarCalificacionesReportePDF(id_grado: string) {
  const res = await fetchClient(
    `/reportes-pdf/calificaciones/grado/${id_grado}`,
    { method: "GET" }
  );

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al descargar el reporte, por favor intente de nuevo."
    );
  }

  return res;
}
