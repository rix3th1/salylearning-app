import { defaultAvatarRoute } from "@/app/constants";
import { User } from "next-auth";

export const profileImage = (user: User) =>
  (user.use_avatar && user.avatar_usuario.avatar?.nom_avatar
    ? `/img/avatars/${user.rol}/${user.avatar_usuario.avatar?.nom_avatar}`
    : user.foto_perfil.foto) || defaultAvatarRoute;
