import { obtenerCuestionariosEstudiantesPorEstado } from "@/services/cuestionario-estudiante.service";
import Nothing from "../../components/Nothing";
import { RelativeTime } from "../../components/RelativeTime";

export default async function TablePendingQuestionaries() {
  const cuestionariosEstudiantes =
    await obtenerCuestionariosEstudiantesPorEstado("PENDIENTE");

  return cuestionariosEstudiantes.length > 0 ? (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr className="active">
            <th>No.</th>
            <th>Nombre de libro</th>
            <th>Nombre de estudiante</th>
            <th>Grado</th>
            <th>Asignado</th>
            <th>Entrega</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {cuestionariosEstudiantes.map(
            (
              {
                fecha_asignado,
                fecha_entrega,
                cuestionario,
                estudiante,
                estado,
              }: any,
              index: number
            ) => (
              <tr key={index} className="warning">
                <td>{index + 1}</td>
                <td>{cuestionario.preguntas[0]?.libros?.nom_libro}</td>
                <td>
                  {`${estudiante.usuario.p_nombre} ${estudiante.usuario.p_apellido}`}
                </td>
                <td>{estudiante.usuario.grado_usuario.grados.nom_grado}</td>
                <td>
                  <RelativeTime datetime={fecha_asignado} />
                </td>
                <td>
                  <RelativeTime datetime={fecha_entrega} />
                </td>
                <td>
                  <span className="label label-warning">{estado}</span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  ) : (
    <Nothing complement="pendientes" />
  );
}
