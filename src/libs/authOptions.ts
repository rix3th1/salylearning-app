import { autenticar, obtenerPerfil } from "@/services/auth.service";
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const login = await autenticar(username, password);
        const jwt = login.access_token;
        const profile = await obtenerPerfil(jwt);

        return {
          ...profile,
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
        const { jwt, ...result } = user as any;
        token.user = result;
        token.jwt = jwt;
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user = token.user as User;
        session.jwt = token.jwt as string;
      }
      return session;
    },
  },
};

export default authOptions;
