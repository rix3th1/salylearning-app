import Nothing from "@/app/learning/teachers/questionaries/components/Nothing";
import { EstadoCuestionario } from "@/services/contadores.service";
import { obtenerCuestionarioEstudiantePorEstado } from "@/services/cuestionario-estudiante.service";
import RowRespuestas from "./RowRespuestas";

export default async function DoneActivitiesTable() {
  const actividadesCompletadas = await obtenerCuestionarioEstudiantePorEstado(
    EstadoCuestionario.COMPLETADO
  );

  return actividadesCompletadas.length > 0 ? (
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
          <RowRespuestas actividadesCompletadas={actividadesCompletadas} />
        </tbody>
      </table>
    </div>
  ) : (
    <Nothing complement="completados" />
  );
}
