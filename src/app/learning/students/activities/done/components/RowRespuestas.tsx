"use client";

import { showSwalCalificacion } from "@/app/learning/teachers/questionaries/components/calificar-cuestionario";

interface IProps {
  actividadesCompletadas: any;
}

export default function RowRespuestas({ actividadesCompletadas }: IProps) {
  return actividadesCompletadas.map(
    ({ cuestionario, calificacion }: any, index: number) => {
      return (
        <tr
          key={index}
          className="success"
          onClick={() => showSwalCalificacion({ cuestionario })}
        >
          <td>{index + 1}</td>
          <td>{cuestionario.preguntas[0]?.libros?.nom_libro}</td>
          <td>{cuestionario.preguntas.length}</td>
          <td>
            {calificacion ? (
              <span className="label label-success">{calificacion}</span>
            ) : (
              <span className="label label-info">No calificado</span>
            )}
          </td>
        </tr>
      );
    }
  );
}
