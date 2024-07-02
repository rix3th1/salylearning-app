import BotonCalificacion from "@/app/learning/teachers/questionaries/components/BotonCalificacion";
import Nothing from "@/app/learning/teachers/questionaries/components/Nothing";
import { RelativeTime } from "@/app/learning/teachers/questionaries/components/RelativeTime";
import { EstadoCuestionario } from "@/services/contadores.service";
import { obtenerCuestionariosEstudiantesPorEstado } from "@/services/cuestionario-estudiante.service";

export default async function TableCompletedQuestionaries() {
  const cuestionariosEstudiantes =
    await obtenerCuestionariosEstudiantesPorEstado(
      EstadoCuestionario.COMPLETADO
    );

  return cuestionariosEstudiantes.length > 0 ? (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr className="active">
            <th>No.</th>
            <th>Nombre de libro</th>
            <th>Nombre estudiante</th>
            <th>Grado</th>
            <th>Fecha asignado</th>
            <th>Fecha entrega</th>
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
                fecha_entrega,
                calificacion,
                estado,
                cuestionario,
                estudiante,
              }: any,
              index: number
            ) => (
              <tr key={index} className="success">
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
                  <span className="label label-success">{estado}</span>
                </td>
                <td>
                  <BotonCalificacion
                    id_cuestionario={cuestionario_id}
                    estadoCuestionario={estado}
                    calificacion={calificacion}
                    cuestionario={cuestionario}
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  ) : (
    <Nothing complement="completados" />
  );
}
