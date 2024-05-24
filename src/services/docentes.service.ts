import { fetchClient, fetchServer } from "./api.service";

export async function obtenerDocente(id_usuario: string) {
  const res = await fetchServer(`/docentes/usuario/${id_usuario}`, {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export const actualizarUsuarioInitState = {
  username: "",
  p_nombre: "",
  s_nombre: "",
  p_apellido: "",
  s_apellido: "",
  email: "",
  fecha_nacimiento: "",
  ciudad: "",
};

export const actualizarDocenteInitState = {
  cod_docente: "",
};

export async function actualizarDocente(
  id: string,
  formData: typeof actualizarDocenteInitState
) {
  const res = await fetchClient(`/docentes/${id}`, {
    method: "PATCH",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
