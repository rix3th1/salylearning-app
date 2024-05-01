import projects from "../meta/index.json";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="py-5">
      <div className="container px-5 mb-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {/* Project Cards */}

            {projects.map((project, i) => (
              <ProjectCard {...project} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
