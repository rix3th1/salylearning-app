import Statistics from "@/app/learning/teachers/statistics/components/Statistics";
import Fallback from "@/components/Fallback";
import { obtenerEstudiante } from "@/services/estudiantes.service";
import { Suspense } from "react";

interface IProps {
  id_estudiante: string;
}

export default async function StatisticsHeader({ id_estudiante }: IProps) {
  const estudiante = await obtenerEstudiante(id_estudiante);

  return (
    <>
      <h2>
        <span style={{ fontWeight: "bold" }}>Cod. Estudiante: </span>
        {estudiante.cod_estudiante}.{" "}
        {estudiante.usuario.p_nombre + " " + estudiante.usuario.p_apellido}
      </h2>
      <Suspense fallback={<Fallback />}>
        <Statistics id_estudiante={id_estudiante} />
      </Suspense>
    </>
  );
}
