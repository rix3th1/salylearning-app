"use client";

import optsPieChart, { StatisticData } from "@/libs/optsPieChart";
import { type TitleComponentOption } from "echarts";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

export default function PieStatic({
  data,
  title,
}: {
  data: any;
  title: TitleComponentOption;
}) {
  const [constructedData, setConstructedData] = useState<StatisticData>([]);

  const opt = optsPieChart(title, constructedData);

  useEffect(() => {
    setConstructedData(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ReactECharts option={opt} notMerge lazyUpdate />;
}
