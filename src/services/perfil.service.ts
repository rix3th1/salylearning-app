import { fetchServer } from "./api.service";

export async function obtenerPerfilUsuario() {
  const res = await fetchServer("/perfil", {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener la información del perfil, por favor intente de nuevo."
    );
  }

  return data;
}
