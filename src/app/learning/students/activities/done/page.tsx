import PageHeader from "@/app/learning/components/PageHeader";
import Nothing from "@/app/learning/teachers/questionaries/components/Nothing";
import { obtenerCuestionarioEstudiantePorEstado } from "@/services/cuestionario-estudiante.service";
import { obtenerEstudiante } from "@/services/estudiantes.service";
import { obtenerPerfilUsuario } from "@/services/perfil.service";
import type { Metadata } from "next";
import ActivitiesTabs from "../components/ActivitiesTabs";
import RowRespuestas from "./components/RowRespuestas";

export const metadata: Metadata = {
  title: "Hechas (Actividades): Estudiantes | Saly Learning",
};

export default async function PendingActivitiesPage() {
  const user = await obtenerPerfilUsuario();
  const estudiante = await obtenerEstudiante(user.id);
  const actividadesCompletadas = await obtenerCuestionarioEstudiantePorEstado(
    "COMPLETADO",
    estudiante.id
  );

  return (
    <>
      <PageHeader title="Actividades hechas" />

      <ActivitiesTabs />

      <section className="container-fluid">
        <div
          className="container-flat-form text-center"
          style={{ backgroundColor: "#d4edda" }}
        >
          <div className="container">
            <h2>¡Actividades hechas!</h2>
            <p>¡Felicidades por completar estas actividades!</p>
            <div className="row" style={{ marginTop: "3rem" }}>
              {actividadesCompletadas.length > 0 ? (
                <div className="table-responsive text-left">
                  <table className="table table-hover">
                    <thead>
                      <tr className="active">
                        <th>No.</th>
                        <th>Nombre del libro</th>
                        <th>Número de preguntas</th>
                        <th>Calificación</th>
                      </tr>
                    </thead>
                    <tbody>
                      <RowRespuestas
                        actividadesCompletadas={actividadesCompletadas}
                      />
                    </tbody>
                  </table>
                </div>
              ) : (
                <Nothing complement="completados" />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
