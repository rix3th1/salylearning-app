import { fetchServer } from "./api.service";

export async function obtenerContadoresLogros() {
  const urls = [
    "/libros-estudiante/contar/terminados",
    "/cuestionario-estudiante/contar/preguntas-correctas",
    "/libros-estudiante/tiempo-lectura",
  ];

  const promises = urls.map((url) =>
    fetchServer(url, {
      method: "GET",
    })
  );

  const responses = await Promise.all(promises);

  const errors = responses.filter((res) => !res.ok);
  if (errors.length > 0) {
    throw new Error(
      "Ocurrió un error al obtener los logros, por favor intente de nuevo."
    );
  }

  return Promise.all(responses.map((res) => res.json()));
}

export async function obtenerEstadisticasLogrosEstudiante() {
  const urls = [
    "/libros-estudiante/estadisticas-semanales/lectura",
    "/cuestionario-estudiante/estadisticas-semanales/preguntas-correctas",
  ];

  const promises = urls.map((url) =>
    fetchServer(url, {
      method: "GET",
    })
  );

  const responses = await Promise.all(promises);

  const errors = responses.filter((res) => !res.ok);
  if (errors.length > 0) {
    throw new Error(
      "Ocurrió un error al obtener los logros, por favor intente de nuevo."
    );
  }

  return Promise.all(responses.map((res) => res.json()));
}
