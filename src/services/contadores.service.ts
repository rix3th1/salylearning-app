import { fetchServer } from "./api.service";

const urls: string[] = [
  "/grados/contar",
  "/libros/contar",
  "/generos-literarios/contar",
  "/cuestionarios/contar-pendientes",
  "/cuestionarios/contar-no-logrados",
  "/cuestionarios/contar-completados",
];

export async function obtenerContadoresParaDocentes() {
  const promises = urls.map((url) => fetchServer(url, { method: "GET" }));

  const responses = await Promise.all(promises);

  const errors = responses.filter((res) => !res.ok);
  if (errors.length > 0) {
    throw new Error(
      "Ocurrió un error al obtener los contadores, por favor intente de nuevo."
    );
  }

  return Promise.all(responses.map((res) => res.json()));
}
