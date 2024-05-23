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

export const perfilEstudianteInitState = {
  p_nombre: "",
  s_nombre: "",
  p_apellido: "",
  s_apellido: "",
  edad: "",
  id_grado: "",
  ciudad: "",
  apodo: "",
};

export async function actualizarPerfilEstudiante(
  id_usuario: string,
  formData: typeof perfilEstudianteInitState
) {}
