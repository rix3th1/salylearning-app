import { User } from "next-auth";
import { fetchClient } from "./api.service";

export async function obtenerAvatars(rol: User["rol"]) {
  const res = await fetchClient(`/avatar/rol?rol=${rol}`, {
    method: "GET",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
