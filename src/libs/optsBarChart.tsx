import type { EChartsOption, TitleComponentOption } from "echarts";

export type StatisticData = { name: string; value: number }[];

export default function optsBarChart(
  title: TitleComponentOption,
  data: StatisticData
): EChartsOption {
  return {
    title,
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data,
        type: "bar",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
}
