import BarStatic from "@/components/Statistics/BarStatic";
import { obtenerEstadisticasDocente } from "@/services/estatisticas-docente.service";
import chartsData from "../meta/chartData.json";

export default async function Statistics() {
  const estadisticas = await obtenerEstadisticasDocente();

  return (
    <div className="row text-center">
      {chartsData.map((chart, index) => (
        <div key={index} className="col-md-6">
          <div className="chart-style">
            <h3>{chart.title}</h3>
            <BarStatic data={estadisticas[index]} title={{}} />
          </div>
        </div>
      ))}
    </div>
  );
}
