import { obtenerLibroFavorito } from "@/services/mis-libros.service";
import ButtonAddFavorite from "./ButtonAddFavorite";

interface IProps {
  libro: any;
  user: any;
}

export default async function FavoriteSection({ libro, user }: IProps) {
  const favorito = await obtenerLibroFavorito(libro.id);
  return <ButtonAddFavorite libro={libro} favorito={favorito} user={user} />;
}
