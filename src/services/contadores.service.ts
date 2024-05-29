import { fetchServer } from "./api.service";

export enum EstadoCuestionario {
  COMPLETADO = "COMPLETADO",
  PENDIENTE = "PENDIENTE",
  NO_LOGRADO = "NO_LOGRADO",
}

const commonUrls = ["/libros/contar"];

const urlsParaDocentes: string[] = [
  "/grados/contar",
  ...commonUrls,
  "/generos-literarios/contar",
  ...Object.values(EstadoCuestionario).map(
    (e) => `/cuestionarios/contar/estado?estado_cuestionario=${e}`
  ),
];

const urlsParaEstudiantes: string[] = ["/mis-libros/contar", ...commonUrls];

export async function obtenerContadoresParaDocentes() {
  const promises = urlsParaDocentes.map((url) =>
    fetchServer(url, { method: "GET" })
  );

  const responses = await Promise.all(promises);

  const errors = responses.filter((res) => !res.ok);
  if (errors.length > 0) {
    throw new Error(
      "Ocurrió un error al obtener los contadores, por favor intente de nuevo."
    );
  }

  return Promise.all(responses.map((res) => res.json()));
}

export async function obtenerContadoresParaEstudiantes() {
  const promises = urlsParaEstudiantes.map((url) =>
    fetchServer(url, { method: "GET" })
  );

  const responses = await Promise.all(promises);

  const errors = responses.filter((res) => !res.ok);
  if (errors.length > 0) {
    throw new Error(
      "Ocurrió un error al obtener los contadores, por favor intente de nuevo."
    );
  }

  return Promise.all(responses.map((res) => res.json()));
}
