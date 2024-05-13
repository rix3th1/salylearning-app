import { api } from "./api.service";

export async function obtenerGrados() {
  const res = await api("/grados", { method: "GET" });

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener los grados escolares, por favor intente de nuevo."
    );
  }

  return res.json();
}
