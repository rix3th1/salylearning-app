"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdAnalytics,
  MdLeaderboard,
  MdOutlineAnalytics,
  MdOutlineLeaderboard,
} from "react-icons/md";

export default function StatisticsAndReportsTabs() {
  const pathname = usePathname().split("/").pop();

  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs nav-justified">
        <li className={pathname === "statistics" ? "active" : ""}>
          <Link href="/learning/teachers/statistics">
            {pathname === "statistics" ? (
              <MdAnalytics style={{ position: "relative", top: 2 }} />
            ) : (
              <MdOutlineAnalytics style={{ position: "relative", top: 2 }} />
            )}{" "}
            Estadísticas general
          </Link>
        </li>
        <li className={pathname === "reports" ? "active" : ""}>
          <Link href="/learning/teachers/reports">
            {pathname === "reports" ? (
              <MdLeaderboard style={{ position: "relative", top: 2 }} />
            ) : (
              <MdOutlineLeaderboard style={{ position: "relative", top: 2 }} />
            )}{" "}
            Reporte Grado
          </Link>
        </li>
      </ul>
    </div>
  );
}
