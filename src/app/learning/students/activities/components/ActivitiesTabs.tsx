"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdCheckCircle, MdPending } from "react-icons/md";

export default function ActivitiesTabs() {
  const pathname = usePathname().split("/").pop();

  return (
    <ul className="nav nav-tabs custom-tabs">
      <li className={pathname === "pending" ? "active" : ""}>
        <Link className="nav-link" href="/learning/students/activities/pending">
          <MdPending /> Por hacer
        </Link>
      </li>
      <li className={pathname === "done" ? "active" : ""}>
        <Link className="nav-link" href="/learning/students/activities/done">
          <MdCheckCircle /> Hecho
        </Link>
      </li>
    </ul>
  );
}
