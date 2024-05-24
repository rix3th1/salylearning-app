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

interface IProps {
  canChange: boolean;
}

export default function SalyFigure({ canChange }: IProps) {
  const pathname = usePathname();

  let image: SalyFigureProps = {
    src: SALYCAPIBARA,
    alt: "SALYLEARNING CAPIBARA",
    width: "55%",
  };

  if (canChange) {
    if (pathname.includes("/books")) {
      image = { src: SALYLEYENDO, alt: "SALY LEYENDO", width: "55%" };
    } else if (
      pathname.includes("/activities") ||
      pathname.includes("/questionaries")
    ) {
      image = { src: SALYQUIZZ, alt: "SALY QUIZZ", width: "55%" };
    } else if (pathname.includes("/help") || pathname.includes("/faqs")) {
      image = {
        src: SALYNOENTENDERNAH,
        alt: "SALY NO ENTENDER NAH",
        width: "55%",
      };
    } else if (
      pathname.includes("/achievements") ||
      pathname.includes("/reports") ||
      pathname.includes("/statistics")
    ) {
      image = { src: SALYSORPRENDIDA, alt: "SALY SORPRENDIDA", width: "55%" };
    }
  }

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
