import "react-image-gallery";

declare module "react-image-gallery" {
  interface ReactImageGalleryItem {
    book_url?: string;
    isNew?: boolean;
  }
}
