"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdGavel,
  MdHandshake,
  MdLocalLibrary,
  MdQuestionAnswer,
} from "react-icons/md";

export default function FaqsTabs() {
  const pathname = usePathname().split("/").pop();

  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs nav-justified" style={{ fontSize: 17 }}>
        <li className={pathname === "introduction" ? "active" : ""}>
          <Link href="/learning/teachers/faqs/introduction">
            <MdLocalLibrary /> Introducción
          </Link>
        </li>
        <li className={pathname === "faqs" ? "active" : ""}>
          <Link href="/learning/teachers/faqs">
            <MdQuestionAnswer /> Preguntas frecuentes
          </Link>
        </li>
        <li className={pathname === "contact-and-support" ? "active" : ""}>
          <Link href="/learning/teachers/faqs/contact-and-support">
            <MdHandshake /> Información de Contacto y Soporte
          </Link>
        </li>
        <li className={pathname === "policies-and-terms" ? "active" : ""}>
          <Link href="/learning/teachers/faqs/policies-and-terms">
            <MdGavel /> Políticas y Términos
          </Link>
        </li>
      </ul>
    </div>
  );
}
