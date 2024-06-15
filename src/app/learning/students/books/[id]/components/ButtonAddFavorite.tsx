"use client";

import { crearMiLibro, eliminarMiLibro } from "@/services/mis-libros.service";
import { useRouter } from "next-nprogress-bar";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface IProps {
  libro: any;
  favorito: any;
  user: any;
}

export default function ButtonAddFavorite({ libro, favorito, user }: IProps) {
  const router = useRouter();

  const handleClickFavorite = async () => {
    if (favorito) {
      await eliminarMiLibro(favorito.id);
    } else {
      await crearMiLibro({ id_libro: libro.id, id_usuario: user.id });
    }

    router.refresh();
  };

  return (
    <button
      className="btn"
      style={{ backgroundColor: "#dd1e82", color: "#fff" }}
      onClick={handleClickFavorite}
    >
      {favorito ? (
        <MdFavorite style={{ position: "relative", top: 3 }} />
      ) : (
        <MdFavoriteBorder style={{ position: "relative", top: 3 }} />
      )}{" "}
      Favoritos
    </button>
  );
}
