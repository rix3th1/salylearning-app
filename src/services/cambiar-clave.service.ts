import { fetchClient } from "./api.service";

export const cambiarClaveInitState = {
  current_password: "",
  password: "",
  confirmar_password: "",
};

export async function cambiarClave(
  formData: typeof cambiarClaveInitState,
  email: string
) {
  const res = await fetchClient(`/cambiar-clave/${email}`, {
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
