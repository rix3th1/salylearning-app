import { API } from "@/constants";
import authOptions from "@/libs/authOptions";
import { Session, getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

const api = (path_api: string, session: Session | null, options: RequestInit) =>
  fetch(API + path_api, {
    ...options,
    headers: {
      ...options?.headers,
      ...(session && { Authorization: `Bearer ${session.jwt}` }),
    },
  });

export const fetchClient = async (path_api: string, options: RequestInit) => {
  const session = await getSession();
  return api(path_api, session, options);
};

export const fetchServer = async (path_api: string, options: RequestInit) => {
  const session = await getServerSession(authOptions);
  return api(path_api, session, options);
};
