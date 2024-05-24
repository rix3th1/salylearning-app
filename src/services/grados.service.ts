import { fetchClient } from "./api.service";

export async function obtenerGrados() {
  const res = await fetchClient("/grados", { method: "GET" });

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error al obtener los grados escolares, por favor intente de nuevo."
    );
  }

  return res.json();
}

export const actualizarGradoUsuarioInitState = {
  id_grado: "",
};

export async function actualizarGradoUsuario(id: string, id_grado: string) {
  const res = await fetchClient(`/grado-usuario/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ id_grado }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
