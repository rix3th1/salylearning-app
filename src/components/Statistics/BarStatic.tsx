"use client";

import optsBarChart, { StatisticData } from "@/libs/optsBarChart";
import { type TitleComponentOption } from "echarts";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

interface IProps {
  data: any;
  title: TitleComponentOption;
}

export default function BarStatic({ data, title }: IProps) {
  const [constructedData, setConstructedData] = useState<StatisticData>([]);

  const opt = optsBarChart(title, constructedData);

  useEffect(() => {
    setConstructedData(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ReactECharts option={opt} notMerge lazyUpdate />;
}
