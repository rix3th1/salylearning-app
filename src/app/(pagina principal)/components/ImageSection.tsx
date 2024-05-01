import Dots from "../svgs/Dots";

export default function ImageSection() {
  return (
    <section className="col-xxl-7">
      {/* Imagen de encabezado */}
      <div className="d-flex justify-content-center mt-5 mt-xxl-0">
        <div className="profile bg-gradient-primary-to-secondary">
          <img
            className="profile-img"
            src="/img/SALYCAPIBARA.png"
            alt="SALYLEARNING CAPIBARA"
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
