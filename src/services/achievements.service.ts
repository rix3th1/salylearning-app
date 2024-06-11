import { fetchServer } from "./api.service";

export async function obtenerContadoresLogros(id_estudiante: string) {
  const urls = [
    `/libros-estudiante/contar/terminados/${id_estudiante}`,
    `/cuestionario-estudiante/contar/preguntas-correctas/${id_estudiante}`,
    `/libros-estudiante/tiempo-lectura/${id_estudiante}`,
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
