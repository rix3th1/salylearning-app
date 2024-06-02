"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdCancel, MdCheckCircle, MdPending } from "react-icons/md";

export default function QuestionariesTabs() {
  const pathname = usePathname().split("/").pop();

  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs nav-justified" style={{ fontSize: 17 }}>
        <li className={pathname === "completed" ? "active" : ""}>
          <Link href="/learning/teachers/questionaries/completed">
            <MdCheckCircle /> Completos
          </Link>
        </li>
        <li className={pathname === "pending" ? "active" : ""}>
          <Link href="/learning/teachers/questionaries/pending">
            <MdPending /> Incompletos
          </Link>
        </li>
        <li className={pathname === "not-achieved" ? "active" : ""}>
          <Link href="/learning/teachers/questionaries/not-achieved">
            <MdCancel /> No logrados
          </Link>
        </li>
      </ul>
    </div>
  );
}
