import { fetchClient } from "./api.service";

export const cambiarClaveInitState = {
  password: "",
  confirmar_password: "",
};

export async function enviarEmailDeRecuperacion(email: string) {
  const res = await fetchClient(
    "/recuperar-clave/enviar-email-de-recuperacion",
    {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function validarToken(token: string) {
  const res = await fetchClient(
    `/recuperar-clave/validar-token?token=${token}`,
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

export async function cambiarClave(
  formData: typeof cambiarClaveInitState,
  token: string
) {
  const res = await fetchClient("/recuperar-clave/cambiar-clave", {
    method: "PATCH",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
