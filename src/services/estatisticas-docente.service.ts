import { fetchServer } from "./api.service";
import { EstadoCuestionario } from "./contadores.service";

const urls = [
  `/libros-estudiante/estadisticas-semanales?terminado=${true}`,
  `/libros-estudiante/estadisticas-semanales?terminado=${false}`,
  `/cuestionario-estudiante/estadisticas-semanales?estado_cuestionario=${EstadoCuestionario.COMPLETADO}`,
  `/cuestionario-estudiante/estadisticas-semanales?estado_cuestionario=${EstadoCuestionario.PENDIENTE}`,
];

export async function obtenerEstadisticasDocente() {
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
