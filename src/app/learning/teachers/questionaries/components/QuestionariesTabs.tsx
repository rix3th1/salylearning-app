"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdCancel,
  MdCheckCircle,
  MdOutlineCancel,
  MdOutlineCheckCircle,
  MdOutlinePending,
  MdPending,
} from "react-icons/md";

export default function QuestionariesTabs() {
  const pathname = usePathname().split("/").pop();

  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs nav-justified" style={{ fontSize: 17 }}>
        <li className={pathname === "completed" ? "active" : ""}>
          <Link href="/learning/teachers/questionaries/completed">
            {pathname === "completed" ? (
              <MdCheckCircle />
            ) : (
              <MdOutlineCheckCircle />
            )}{" "}
            Completos
          </Link>
        </li>
        <li className={pathname === "pending" ? "active" : ""}>
          <Link href="/learning/teachers/questionaries/pending">
            {pathname === "pending" ? <MdPending /> : <MdOutlinePending />}{" "}
            Incompletos
          </Link>
        </li>
        <li className={pathname === "not-achieved" ? "active" : ""}>
          <Link href="/learning/teachers/questionaries/not-achieved">
            {pathname === "not-achieved" ? <MdCancel /> : <MdOutlineCancel />}{" "}
            No logrados
          </Link>
        </li>
      </ul>
    </div>
  );
}
