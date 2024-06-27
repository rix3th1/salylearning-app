import { ReactImageGalleryItem } from "react-image-gallery";

/**
 * Función que determina si un libro es nuevo o no según su fecha de creación y un rango de días
 * @param createdAt fecha de creación del libro
 * @param range rango de días desde la fecha actual
 * @returns booleano que indica si el libro es nuevo o no
 */
function isNew(createdAt: string, range: number) {
  const libroDate = new Date(createdAt);
  const msDiff = Date.now() - libroDate.getTime();
  const daysDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
  return daysDiff <= range;
}

export const mapDataCarrousel = (libros: any, withUrl: boolean) => {
  return libros.map(
    (libro: any): ReactImageGalleryItem => ({
      original: libro.imagen_portada,
      originalAlt: libro.nom_libro,
      description: libro.nom_libro,
      isNew: isNew(libro.createdAt, 5),
      ...(withUrl && {
        book_url: `/learning/students/books/${libro.id}`,
      }),
    })
  );
};
