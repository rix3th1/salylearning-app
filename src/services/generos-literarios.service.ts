import { fetchClient, fetchServer } from "./api.service";

async function obtenerGenerosLiterariosC() {
  const res = await fetchClient("/generos-literarios", { method: "GET" });

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener los géneros literarios, por favor intente de nuevo."
    );
  }

  return res.json();
}

async function obtenerGenerosLiterariosS() {
  const res = await fetchServer("/generos-literarios", { method: "GET" });

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener los géneros literarios, por favor intente de nuevo."
    );
  }

  return res.json();
}

export const obtenerGenerosLiterarios = {
  client: obtenerGenerosLiterariosC,
  server: obtenerGenerosLiterariosS,
};
