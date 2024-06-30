"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdAccountCircle,
  MdManageAccounts,
  MdOutlineAccountCircle,
  MdOutlineManageAccounts,
} from "react-icons/md";

export default function AccountSettingsTabs() {
  const pathname = usePathname().split("/").pop();

  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs nav-justified">
        <li className={pathname === "profile" ? "active" : ""}>
          <Link href="/learning/teachers/account-settings/profile">
            {pathname === "profile" ? (
              <MdAccountCircle style={{ position: "relative", top: 2 }} />
            ) : (
              <MdOutlineAccountCircle
                style={{ position: "relative", top: 2 }}
              />
            )}{" "}
            Perfil
          </Link>
        </li>
        <li className={pathname === "advanced" ? "active" : ""}>
          <Link href="/learning/teachers/account-settings/advanced">
            {pathname === "advanced" ? (
              <MdManageAccounts style={{ position: "relative", top: 2 }} />
            ) : (
              <MdOutlineManageAccounts
                style={{ position: "relative", top: 2 }}
              />
            )}{" "}
            Otras opciones
          </Link>
        </li>
      </ul>
    </div>
  );
}
