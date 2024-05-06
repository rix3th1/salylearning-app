import comoImage from "@/assets/como.png";
import Image from "next/image";
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

export default function Card2() {
  return (
    <div className="card shadow border-0 rounded-4 mb-5">
      <div className="card-body p-5">
        <div className="row align-items-center gx-5">
          <div className="col text-center text-lg-start mb-4 mb-lg-0">
            <div className="bg-light p-4 rounded-4">
              <Image
                className="img-fluid rounded-3"
                quality={100}
                placeholder="blur"
                src={comoImage}
                alt="importancia"
                width={comoImage.width}
                height={comoImage.height}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div>
              Para entender correctamente el contenido de una lectura, se debe
              tener un buen uso de la entonación, identificar características
              del texto y procesar la información, por ende, si no se tiene el
              manejo de estas características será muy difícil entender el
              aprendizaje de la lectura.
            </div>
            <Link
              className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder my-2"
              href="https://www.educo.org/blog/¿como-trabajar-la-comprension-lectora-en-ninos-y-n"
              target="_blank"
            >
              Más info.&nbsp;
              <MdOpenInNew style={{ marginBottom: "2px" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
