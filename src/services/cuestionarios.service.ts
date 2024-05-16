import { fetchServer } from "./api.service";

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
