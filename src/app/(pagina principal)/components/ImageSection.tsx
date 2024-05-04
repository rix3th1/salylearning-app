import Image from "next/image";
import Dots from "./svgs/Dots";

export default function ImageSection() {
  return (
    <section className="col-xxl-7">
      {/* Imagen de encabezado */}
      <div className="d-flex justify-content-center mt-5 mt-xxl-0">
        <div className="profile bg-gradient-primary-to-secondary">
          <Image
            className="profile-img"
            quality={100}
            src="/img/SALYCAPIBARA.png"
            alt="SALYLEARNING CAPIBARA"
            width={280}
            height={300}
            style={{
              width: "auto",
            }}
            priority
          />
          {/* SVG Dots */}
          <div className="dots-1">
            <Dots />
          </div>
          <div className="dots-2">
            <Dots />
          </div>
          <div className="dots-3">
            <Dots />
          </div>
          <div className="dots-4">
            <Dots />
          </div>
          {/* END of SVG dots */}
        </div>
      </div>
    </section>
  );
}
