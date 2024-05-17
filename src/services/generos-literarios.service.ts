import { fetchClient } from "./api.service";

export async function obtenerGenerosLiterarios() {
  const res = await fetchClient("/generos-literarios", { method: "GET" });

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener los géneros literarios, por favor intente de nuevo."
    );
  }

  return res.json();
}
