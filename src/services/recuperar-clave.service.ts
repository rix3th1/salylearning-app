import { api } from "./api.service";

export async function enviarEmailDeRecuperacion(email: string) {
  const res = await api("/recuperar-clave/enviar-email-de-recuperacion", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
