"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdCheckCircle,
  MdOutlineCheckCircle,
  MdOutlinePending,
  MdPending,
} from "react-icons/md";

export default function ActivitiesTabs() {
  const pathname = usePathname().split("/").pop();

  return (
    <ul className="nav nav-tabs custom-tabs">
      <li className={pathname === "pending" ? "active" : ""}>
        <Link className="nav-link" href="/learning/students/activities/pending">
          {pathname === "pending" ? (
            <MdCheckCircle />
          ) : (
            <MdOutlineCheckCircle />
          )}{" "}
          Por hacer
        </Link>
      </li>
      <li className={pathname === "done" ? "active" : ""}>
        <Link className="nav-link" href="/learning/students/activities/done">
          {pathname === "done" ? <MdPending /> : <MdOutlinePending />} Hecho
        </Link>
      </li>
    </ul>
  );
}
