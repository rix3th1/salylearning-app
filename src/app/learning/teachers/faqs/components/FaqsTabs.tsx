"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdHandshake,
  MdLocalLibrary,
  MdOutlineHandshake,
  MdOutlineLocalLibrary,
  MdOutlinePolicy,
  MdOutlineQuestionAnswer,
  MdPolicy,
  MdQuestionAnswer,
} from "react-icons/md";

export default function FaqsTabs() {
  const pathname = usePathname().split("/").pop();

  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs nav-justified">
        <li className={pathname === "introduction" ? "active" : ""}>
          <Link href="/learning/teachers/faqs/introduction">
            {pathname === "introduction" ? (
              <MdLocalLibrary style={{ position: "relative", top: 2 }} />
            ) : (
              <MdOutlineLocalLibrary style={{ position: "relative", top: 2 }} />
            )}{" "}
            Introducción
          </Link>
        </li>
        <li className={pathname === "faqs" ? "active" : ""}>
          <Link href="/learning/teachers/faqs">
            {pathname === "faqs" ? (
              <MdQuestionAnswer style={{ position: "relative", top: 2 }} />
            ) : (
              <MdOutlineQuestionAnswer
                style={{ position: "relative", top: 2 }}
              />
            )}{" "}
            Preguntas frecuentes
          </Link>
        </li>
        <li className={pathname === "contact-and-support" ? "active" : ""}>
          <Link href="/learning/teachers/faqs/contact-and-support">
            {pathname === "contact-and-support" ? (
              <MdHandshake style={{ position: "relative", top: 2 }} />
            ) : (
              <MdOutlineHandshake style={{ position: "relative", top: 2 }} />
            )}{" "}
            Información de Contacto y Soporte
          </Link>
        </li>
        <li className={pathname === "policies-and-terms" ? "active" : ""}>
          <Link href="/learning/teachers/faqs/policies-and-terms">
            {pathname === "policies-and-terms" ? (
              <MdPolicy style={{ position: "relative", top: 2 }} />
            ) : (
              <MdOutlinePolicy style={{ position: "relative", top: 2 }} />
            )}{" "}
            Políticas y Términos
          </Link>
        </li>
      </ul>
    </div>
  );
}
