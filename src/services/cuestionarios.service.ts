import { fetchClient, fetchServer } from "./api.service";

export const cuestionarioInitState = {
  fecha_entrega: "",
  preguntas: [] as number[],
};

export async function crearCuestionarioConPreguntas(
  formData: typeof cuestionarioInitState
) {
  const res = await fetchClient("/cuestionarios/preguntas", {
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

export async function obtenerCuestionariosPorEstado(
  estado: "COMPLETADO" | "PENDIENTE" | "NO_LOGRADO"
) {
  const res = await fetchServer(
    `/cuestionarios/estado?estado_cuestionario=${estado}`,
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
