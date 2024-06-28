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
      style={{
        cursor: "pointer",
        margin: "17px 26px",
      }}
    />
  );
}
