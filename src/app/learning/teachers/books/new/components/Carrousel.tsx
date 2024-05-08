"use client";

import CustomBookItem from "@/app/learning/components/CustomBookItem";
import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Carrousel(props: ReactImageGalleryProps) {
  return (
    <ImageGallery
      showBullets
      showFullscreenButton={false}
      showPlayButton={false}
      showIndex
      autoPlay
      slideDuration={1000}
      slideInterval={5000}
      renderItem={(item) => <CustomBookItem item={item} />}
      {...props}
    />
  );
}
