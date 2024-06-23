import { obtenerCuestionariosEstudiantesPorEstado } from "@/services/cuestionario-estudiante.service";
import BotonCalificacion from "../../components/BotonCalificacion";
import Nothing from "../../components/Nothing";
import { RelativeTime } from "../../components/RelativeTime";

export default async function TableNotAchievedQuestionaries() {
  const cuestionariosEstudiantes =
    await obtenerCuestionariosEstudiantesPorEstado("NO_LOGRADO");

  return cuestionariosEstudiantes.length > 0 ? (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr className="active">
            <th>No.</th>
            <th>Nombre de libro</th>
            <th>Nombre estudiante</th>
            <th>Grado</th>
            <th>Asignado</th>
            <th>Estado</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {cuestionariosEstudiantes.map(
            (
              {
                id: cuestionario_id,
                fecha_asignado,
                estado,
                calificacion,
                cuestionario,
                estudiante,
              }: any,
              index: number
            ) => (
              <tr key={index} className="danger">
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
                  <span className="label label-danger">{estado}</span>
                </td>
                <td>
                  <BotonCalificacion
                    id_cuestionario={cuestionario_id}
                    estadoCuestionario={estado}
                    calificacion={calificacion}
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  ) : (
    <Nothing complement="no logrados" />
  );
}
