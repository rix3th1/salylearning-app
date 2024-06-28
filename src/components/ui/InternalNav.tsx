import { obtenerPerfilUsuario } from "@/services/perfil.service";
import MenuButton from "./MenuButton";
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
        <NavInteractionButtons user={user} isStudent={isStudent} />
        <MenuButton />
      </ul>
    </nav>
  );
}
