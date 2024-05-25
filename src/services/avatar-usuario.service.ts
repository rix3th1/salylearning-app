import { fetchClient } from "./api.service";

export const avatarUsuarioInitState = {
  id_avatar: "",
};

export async function actualizarAvatarUsuario(
  id: string,
  formData: typeof avatarUsuarioInitState
) {
  const res = await fetchClient(`/avatar-usuario/${id}`, {
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
