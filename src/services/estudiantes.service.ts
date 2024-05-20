import { fetchServer } from "./api.service";

export async function obtenerEstudiante(id_usuario: string) {
  const res = await fetchServer(`/estudiantes/usuario/${id_usuario}`, {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
