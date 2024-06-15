import { fetchClient, fetchServer } from "./api.service";

const asignarCuestionarioInitState = {
  id_cuestionario: "",
  fecha_entrega: "",
};

export async function calificarCuestionarioEstudiante(
  id_cuestionario: string,
  calificacion: number
) {
  const res = await fetchClient(
    `/cuestionario-estudiante/calificar/${id_cuestionario}`,
    {
      method: "PATCH",
      body: JSON.stringify({ calificacion }),
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function asignarCuestionarioEstudianteATodosLosEstudiantes(
  formData: typeof asignarCuestionarioInitState
) {
  const res = await fetchClient("/cuestionario-estudiante/asignar", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function obtenerCuestionariosEstudiantesPorEstado(
  estado: "COMPLETADO" | "PENDIENTE" | "NO_LOGRADO"
) {
  const res = await fetchServer(
    `/cuestionario-estudiante/estado?estado_cuestionario=${estado}`,
    {
      method: "GET",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function obtenerCuestionarioEstudiantePorEstado(
  estado: "COMPLETADO" | "PENDIENTE" | "NO_LOGRADO",
  id_estudiante: string
) {
  const res = await fetchServer(
    `/cuestionario-estudiante/estado/${id_estudiante}?estado_cuestionario=${estado}`,
    {
      method: "GET",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
