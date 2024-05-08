import Link from "next/link";
import type { ReactImageGalleryItem } from "react-image-gallery";

interface IProps {
  item: ReactImageGalleryItem;
}

export default function CustomBookItem({ item }: IProps) {
  return (
    <div className="image-gallery-image">
      <img
        src={item.original}
        alt={item.originalAlt || "Imagen del libro"}
        className="image-gallery-image"
      />
      {item.description && (
        <span className="image-gallery-description">
          {item.description}
          {item.book_url && (
            <Link href={item.book_url} className="btn-book">
              Leer
            </Link>
          )}
        </span>
      )}
    </div>
  );
}
