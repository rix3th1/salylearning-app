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
      <ul className="nav nav-tabs nav-justified">
        <li className={pathname === "completed" ? "active" : ""}>
          <Link href="/learning/teachers/questionaries/completed">
            {pathname === "completed" ? (
              <MdCheckCircle style={{ position: "relative", top: 2 }} />
            ) : (
              <MdOutlineCheckCircle style={{ position: "relative", top: 2 }} />
            )}{" "}
            Completos
          </Link>
        </li>
        <li className={pathname === "pending" ? "active" : ""}>
          <Link href="/learning/teachers/questionaries/pending">
            {pathname === "pending" ? (
              <MdPending style={{ position: "relative", top: 2 }} />
            ) : (
              <MdOutlinePending style={{ position: "relative", top: 2 }} />
            )}{" "}
            Incompletos
          </Link>
        </li>
        <li className={pathname === "not-achieved" ? "active" : ""}>
          <Link href="/learning/teachers/questionaries/not-achieved">
            {pathname === "not-achieved" ? (
              <MdCancel style={{ position: "relative", top: 2 }} />
            ) : (
              <MdOutlineCancel style={{ position: "relative", top: 2 }} />
            )}{" "}
            No logrados
          </Link>
        </li>
      </ul>
    </div>
  );
}
