import visionImage from "@/assets/vision.jpg";
import Image from "next/image";

interface IProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: IProps) {
  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
      <div className="card-body p-0">
        <article className="d-flex flex-column flex-md-row align-items-center">
          <div className="p-5">
            <h2 className="fw-bolder">{title}</h2>
            <p>{description} </p>
          </div>
          <Image
            className="img-fluid"
            quality={100}
            placeholder="blur"
            src={visionImage}
            alt={title}
            width={visionImage.width}
            height={visionImage.height}
          />
        </article>
      </div>
    </div>
  );
}
