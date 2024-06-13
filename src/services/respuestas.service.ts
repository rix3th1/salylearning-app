import { fetchClient } from "./api.service";

export async function responderPreguntasCuestionario(formData: any[]) {
  const res = await fetchClient("/respuestas/responder", {
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
