"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdBarChart,
  MdOutlineBarChart,
  MdTrendingUp,
  MdOutlineTrendingUp,
} from "react-icons/md";

export default function StatisticsAndReportsTabs() {
  const pathname = usePathname().split("/").pop();

  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs nav-justified">
        <li className={pathname === "statistics" ? "active" : ""}>
          <Link href="/learning/teachers/statistics">
            {pathname === "statistics" ? <MdBarChart /> : <MdOutlineBarChart />}{" "}
            Estadísticas general
          </Link>
        </li>
        <li className={pathname === "reports" ? "active" : ""}>
          <Link href="/learning/teachers/reports">
            {pathname === "reports" ? (
              <MdTrendingUp />
            ) : (
              <MdOutlineTrendingUp />
            )}{" "}
            Reporte Grado
          </Link>
        </li>
      </ul>
    </div>
  );
}
