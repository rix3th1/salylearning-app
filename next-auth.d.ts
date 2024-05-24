import "next-auth";

declare module "next-auth" {
  interface Session {
    jwt: string;
    user: User;
  }

  interface User {
    id: number;
    username: string;
    p_nombre: string;
    s_nombre: string;
    p_apellido: string;
    s_apellido: string;
    edad: number;
    fecha_nacimiento?: string;
    ciudad?: string;
    email: string;
    rol: "ESTUDIANTE" | "DOCENTE" | "ADMIN";
    verificado: boolean;
    avatar_usuario?: any;
    foto_perfil?: any;
    grado_usuario: any;
  }
}
