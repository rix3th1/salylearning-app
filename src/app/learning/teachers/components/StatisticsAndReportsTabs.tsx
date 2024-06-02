"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdBarChart, MdTrendingUp } from "react-icons/md";

export default function StatisticsAndReportsTabs() {
  const pathname = usePathname().split("/").pop();

  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs nav-justified">
        <li className={pathname === "statistics" ? "active" : ""}>
          <Link href="/learning/teachers/statistics">
            <MdBarChart /> Estadísticas general
          </Link>
        </li>
        <li className={pathname === "reports" ? "active" : ""}>
          <Link href="/learning/teachers/reports">
            <MdTrendingUp /> Reporte Grado
          </Link>
        </li>
      </ul>
    </div>
  );
}
