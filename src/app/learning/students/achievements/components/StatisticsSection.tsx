import PieStatic from "@/components/Statistics/PieStatic";
import { obtenerEstadisticasLogrosEstudiante } from "@/services/achievements.service";
import { chartsData } from "../meta";

export default async function StatisticsSection() {
  const estadisticasLogros = await obtenerEstadisticasLogrosEstudiante();

  return chartsData.map((chart, index) => (
    <div key={index} className="col-chart">
      <h4>{chart.title}</h4>
      <PieStatic title={{}} data={estadisticasLogros[index]} />
    </div>
  ));
}
