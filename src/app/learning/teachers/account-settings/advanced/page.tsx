import PageHeader from "@/app/learning/components/PageHeader";
import type { Metadata } from "next";
import Link from "next/link";
import AdvancedSettingsForm from "./components/AdvancedSettingsForm";
import ChangePasswordForm from "./components/ChangePasswordForm";

export const metadata: Metadata = {
  title: "Configuración Avanzada: Docentes | Saly Learning",
};

export default function TeacherAccountSettingsPage() {
  return (
    <>
      <PageHeader title="Configuración avanzada de cuenta" />

      <ul className="nav nav-tabs nav-justified">
        <li>
          <Link href="/learning/teachers/account-settings/profile">Perfil</Link>
        </li>
        <li className="active">
          <Link href="/learning/teachers/account-settings/advanced">
            Otras opciones
          </Link>
        </li>
      </ul>

      <div style={{ backgroundColor: "#adb5bd", padding: 20 }}>
        <div
          className="container-fluid"
          style={{
            borderRadius: 15,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            maxWidth: "80%",
          }}
        >
          <div
            className="row"
            style={{
              padding: "10px 20px 15px 5px",
              justifyContent: "space-between",
            }}
          >
            {/* Columna izquierda */}
            <div className="col-md-6">
              <AdvancedSettingsForm />
            </div>

            {/* Columna derecha */}
            <div className="col-md-6">
              <ChangePasswordForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
