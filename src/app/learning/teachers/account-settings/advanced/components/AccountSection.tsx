import { obtenerDocente } from "@/services/docentes.service";
import { obtenerPerfilUsuario } from "@/services/perfil.service";
import AdvancedSettingsForm from "./AdvancedSettingsForm";
import ChangePasswordForm from "./ChangePasswordForm";

export default async function AccountSection() {
  const user = await obtenerPerfilUsuario();
  const docente = await obtenerDocente();

  return (
    <>
      <div className="col-md-6">
        <AdvancedSettingsForm user={user} teacher={docente} />
      </div>

      <div className="col-md-6">
        <ChangePasswordForm email={user.email} />
      </div>
    </>
  );
}
