interface IProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: IProps) {
  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
      <div className="card-body p-0">
        <article className="d-flex flex-column flex-md-row align-items-center">
          <div className="p-5">
            <h2 className="fw-bolder">{title}</h2>
            <p>{description} </p>
          </div>
          <img className="img-fluid" src={image} alt={title} />
        </article>
      </div>
    </div>
  );
}
