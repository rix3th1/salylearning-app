"use client";

import SALYCAPIBARA from "@/assets/saly/SALY CAPIBARA.png";
import SALYLEYENDO from "@/assets/saly/SALY LEYENDO.png";
import SALYNOENTENDERNAH from "@/assets/saly/SALY NO ENTENDER NAH.png";
import SALYQUIZZ from "@/assets/saly/SALY QUIZZ.png";
import SALYSORPRENDIDA from "@/assets/saly/SALY SORPRENDIDA.png";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

interface SalyFigureProps {
  src: StaticImageData;
  alt: string;
  width: string;
}

export default function SalyFigure() {
  const pathname = usePathname();
  const image: SalyFigureProps = pathname.includes("/books")
    ? { src: SALYLEYENDO, alt: "SALY LEYENDO", width: "55%" }
    : pathname.includes("/activities") || pathname.includes("/questionaries")
    ? { src: SALYQUIZZ, alt: "SALY QUIZZ", width: "55%" }
    : pathname.includes("/help") || pathname.includes("/faqs")
    ? { src: SALYNOENTENDERNAH, alt: "SALY NO ENTENDER NAH", width: "55%" }
    : pathname.includes("/achievements") ||
      pathname.includes("/reports") ||
      pathname.includes("/statistics")
    ? { src: SALYSORPRENDIDA, alt: "SALY SORPRENDIDA", width: "55%" }
    : { src: SALYCAPIBARA, alt: "SALYLEARNING CAPIBARA", width: "55%" };

  return (
    <figure>
      <Image
        className="img-responsive center-box"
        quality={100}
        src={image.src}
        alt="SALYLEARNING CAPIBARA"
        width={480}
        height={720}
        style={{ width: image.width }}
        priority
      />
    </figure>
  );
}
