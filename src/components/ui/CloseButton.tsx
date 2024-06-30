"use client";

import { MdClose } from "react-icons/md";

export default function CloseButton() {
  const handleClickClose = () => {
    const mobileMenu = $(".navbar-lateral");
    mobileMenu.fadeOut(300);
  };

  return (
    <MdClose
      onClick={handleClickClose}
      className="visible-xs pull-left mobile-menu-button"
      style={{ position: "relative", top: 15, left: 25, fontSize: 25 }}
    />
  );
}
