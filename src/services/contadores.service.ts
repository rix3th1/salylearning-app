import { fetchServer } from "./api.service";

export enum EstadoCuestionario {
  PENDIENTE = "PENDIENTE",
  NO_LOGRADO = "NO_LOGRADO",
  COMPLETADO = "COMPLETADO",
}

const commonUrls = ["/libros/contar"];

const urlsParaDocentes: string[] = [
  "/grados/contar",
  ...commonUrls,
  "/generos-literarios/contar",
  ...Object.values(EstadoCuestionario).map(
    (estado_cuestionario) =>
      `/cuestionario-estudiante/contar/estado?estado_cuestionario=${estado_cuestionario}`
  ),
];

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
  const urlsParaEstudiantes: string[] = [
    "/mis-libros/contar/usuario",
    "/libros-estudiante/contar/no-terminados",
    "/libros-estudiante/contar/terminados",
  ];

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
