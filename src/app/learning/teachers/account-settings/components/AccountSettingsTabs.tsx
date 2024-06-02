"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdAccountCircle, MdTune } from "react-icons/md";

export default function AccountSettingsTabs() {
  const pathname = usePathname().split("/").pop();

  return (
    <ul className="nav nav-tabs nav-justified">
      <li className={pathname === "profile" ? "active" : ""}>
        <Link href="/learning/teachers/account-settings/profile">
          <MdAccountCircle /> Perfil
        </Link>
      </li>
      <li className={pathname === "advanced" ? "active" : ""}>
        <Link href="/learning/teachers/account-settings/advanced">
          <MdTune /> Otras opciones
        </Link>
      </li>
    </ul>
  );
}
