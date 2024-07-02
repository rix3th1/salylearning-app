import { fetchServer } from "./api.service";
import { EstadoCuestionario } from "./contadores.service";

export async function obtenerEstadisticasDocente(
  id_estudiante?: string,
  id_grado?: string
) {
  const urls = [
    `/libros-estudiante/estadisticas-semanales/${true}?id_estudiante=${id_estudiante}&id_grado=${id_grado}`,
    `/libros-estudiante/estadisticas-semanales/${false}?id_estudiante=${id_estudiante}&id_grado=${id_grado}`,
    `/cuestionario-estudiante/estadisticas-semanales/${EstadoCuestionario.COMPLETADO}?id_estudiante=${id_estudiante}&id_grado=${id_grado}`,
    `/cuestionario-estudiante/estadisticas-semanales/${EstadoCuestionario.PENDIENTE}?id_estudiante=${id_estudiante}&id_grado=${id_grado}`,
  ];

  const promises = urls.map((url) => fetchServer(url, { method: "GET" }));

  const responses = await Promise.all(promises);

  const errors = responses.filter((res) => !res.ok);
  if (errors.length > 0) {
    throw new Error(
      "Ocurrió un error al obtener las estadísticas, por favor intente de nuevo."
    );
  }

  return Promise.all(responses.map((res) => res.json()));
}
