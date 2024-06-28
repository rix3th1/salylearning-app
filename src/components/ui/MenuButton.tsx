"use client";

import { MdMenu } from "react-icons/md";

export default function MenuButton() {
  const handleClickMenu = () => {
    const mobileMenu = $(".navbar-lateral");
    mobileMenu.fadeIn(300);
  };

  return (
    <li
      className="mobile-menu-button visible-xs"
      style={{ float: "left" }}
      onClick={handleClickMenu}
    >
      <MdMenu style={{ fontSize: 25, marginTop: 15 }} />
    </li>
  );
}
