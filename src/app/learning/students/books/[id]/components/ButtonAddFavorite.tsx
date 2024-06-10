"use client";

import { MdFavoriteBorder } from "react-icons/md";

export default function ButtonAddFavorite() {
  return (
    <button
      className="btn"
      style={{ backgroundColor: "#dd1e82", color: "#fff" }}
    >
      <MdFavoriteBorder style={{ position: "relative", top: 3 }} /> Favoritos
    </button>
  );
}
