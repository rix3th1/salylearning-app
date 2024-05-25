import { fetchClient } from "./api.service";

export async function crearFotoPerfil(formData: FormData) {
  const res = await fetchClient("/foto-perfil", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function actualizarFotoPerfil(id: string, formData: FormData) {
  const res = await fetchClient(`/foto-perfil/${id}`, {
    method: "PATCH",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
