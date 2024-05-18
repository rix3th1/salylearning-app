import Card1 from "@/app/(pagina principal)/components/Card1";
import Card2 from "@/app/(pagina principal)/components/Card2";
import Card3 from "@/app/(pagina principal)/components/Card3";

export default function ResumeSection() {
  return (
    <section className="container px-5 my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0 text-gradient d-inline">
          Nuestros temas a tratar
        </h1>
      </div>

      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          {/* Experience Section */}
          <article>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="text-primary fw-bolder mb-0">
                ¿Qué es la compresión lectora en niños?
              </h2>
            </div>
            {/* Experience Card 1 */}

            <Card1 />
          </article>

          <article>
            <h2 className="text-secondary fw-bolder mb-4">
              ¿Importancia de la comprensión lectora?
            </h2>

            {/* Education Card 1 */}
            <Card2 />
          </article>

          <article>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="text-primary fw-bolder mb-0">
                ¿Cómo desarrollar la compresión por medio de actividades?
              </h2>
            </div>

            {/* Experience Card 1 */}
            <Card3 />
          </article>
        </div>
      </div>
    </section>
  );
}
