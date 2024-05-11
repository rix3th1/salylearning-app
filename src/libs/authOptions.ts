import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { api } from "./fetchClient";

const authOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV === "development",
  providers: [
    CredentialsProvider({
      id: "salylearning-app-credentials",
      name: "SalyLearning Credentials",
      type: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Ingrese su usuario",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Ingrese su contraseña",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error(
            "No se han proporcionado credenciales para iniciar sesión."
          );
        }

        const { username, password } = credentials;

        const res = await api("auth/login", {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error("Credenciales incorrectas.");
        }

        const parsedResponse = await res.json();
        const jwt = parsedResponse.access_token;

        return {
          id: "1",
          ...credentials,
          jwt,
        };
      },
    }),
  ],
  theme: {
    colorScheme: "dark",
  },
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          jwt: (user as any).jwt,
        };
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user = token.jwt as any;
      }
      return session;
    },
  },
};

export default authOptions;
