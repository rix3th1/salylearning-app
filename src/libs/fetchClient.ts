import { API } from "@/constants";
import { getSession } from "next-auth/react";

export const api = async (path_api: string, options: RequestInit) => {
  const session = await getSession();

  return fetch(API + path_api, {
    ...options,
    headers: {
      ...options?.headers,
      ...(session && { Authorization: `Bearer ${session.jwt}` }),
    },
  });
};