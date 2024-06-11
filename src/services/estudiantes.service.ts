import { fetchClient, fetchServer } from "./api.service";

export async function obtenerEstudiantes() {
  const res = await fetchServer("/estudiantes", {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function obtenerEstudiantesConMejorPuntaje() {
  const res = await fetchServer("/estudiantes/mejor-puntaje", {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

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

export const actualizarEstudianteInitState = {
  cod_estudiante: "",
  apodo: "",
};

export async function actualizarEstudiante(
  id: string,
  formData: typeof actualizarEstudianteInitState
) {
  const res = await fetchClient(`/estudiantes/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      ...formData,
      apodo: formData.apodo || null,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
