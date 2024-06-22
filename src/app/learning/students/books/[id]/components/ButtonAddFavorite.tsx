"use client";

import { crearMiLibro, eliminarMiLibro } from "@/services/mis-libros.service";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { toast } from "sonner";

interface IProps {
  libro: any;
  favorito: any;
  user: any;
}

export default function ButtonAddFavorite({ libro, favorito, user }: IProps) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleClickFavorite = async () => {
    setIsLoading(true);

    try {
      if (favorito) {
        await eliminarMiLibro(favorito.id);
      } else {
        await crearMiLibro({ id_libro: libro.id, id_usuario: user.id });
      }
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message.replace(/,/g, ", "));
      }
    } finally {
      setIsLoading(false);
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
      {isLoading ? "Cargando..." : "Favoritos"}
    </button>
  );
}
