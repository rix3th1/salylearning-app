import { obtenerPerfilUsuario } from "@/services/perfil.service";
import MenuButton from "./MenuButton";
import MyProfileButton from "./MyProfileButton";
import NavInteractionButtons from "./NavInteractionButtons";

export default async function InternalNav() {
  const user = await obtenerPerfilUsuario();
  const isStudent = user?.rol === "ESTUDIANTE";

  return (
    <nav
      className="navbar-user-top full-reset"
      style={{ position: "sticky", zIndex: 7 }}
    >
      <ul className="list-unstyled full-reset">
        <MyProfileButton
          user={user}
          href={`/learning/${
            isStudent ? "students/account" : "teachers/account-settings/profile"
          }`}
        />
        <NavInteractionButtons isStudent={isStudent} />
        <MenuButton />
      </ul>
    </nav>
  );
}
