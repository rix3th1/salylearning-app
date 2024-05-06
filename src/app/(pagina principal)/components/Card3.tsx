import porqueImage from "@/assets/porque.png";
import Image from "next/image";
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

export default function Card3() {
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
                src={porqueImage}
                alt="imagen como desarrollar"
                width={porqueImage.width}
                height={porqueImage.height}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div>
              Una vez aclarado el concepto de que es la compresión lectora en
              niños, continuamos con el paso del desarrollo en compresión
              lectora, algunos de los métodos.
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
