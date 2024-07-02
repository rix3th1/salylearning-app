import { obtenerGrado } from "@/services/grados.service";

interface IProps {
  id_grado: string;
  label: string;
}

export default async function StatisticsTitle({ label, id_grado }: IProps) {
  const grado = await obtenerGrado(id_grado);
  const selectedGradeName = grado.nom_grado as string;

  return (
    <h2>
      {label}{" "}
      {`${selectedGradeName[0].toUpperCase()}${selectedGradeName.slice(1)}`}
    </h2>
  );
}
