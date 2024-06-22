import { ReactImageGalleryItem } from "react-image-gallery";

export const mapDataCarrousel = (libros: any, withUrl: boolean) => {
  return libros.map(
    (libro: any): ReactImageGalleryItem => ({
      original: libro.imagen_portada,
      originalAlt: libro.nom_libro,
      description: libro.nom_libro,
      ...(withUrl && {
        book_url: `/learning/students/books/${libro.id}`,
      }),
    })
  );
};
