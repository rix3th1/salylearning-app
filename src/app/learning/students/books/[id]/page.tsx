import { MdFavorite } from "react-icons/md";

export default function ReadBookPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1 className="all-titles">
            SALY LEARNING <small>Inicio</small>
          </h1>
        </div>
      </div>

      <section id="contenido">
        <div className="container-fluid">
          <div className="container-fluid">
            <div className="row">
              <div className="container-fluid">
                <div id="contenido1" style={{ display: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 0,
                      paddingTop: "56.25%",
                      paddingBottom: 0,
                      boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
                      marginTop: "1.6em",
                      marginBottom: "0.9em",
                      overflow: "hidden",
                      borderRadius: 8,
                      willChange: "transform",
                    }}
                  >
                    <iframe
                      loading="lazy"
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        border: "none",
                        padding: 0,
                        margin: 0,
                      }}
                      src="https://www.canva.com/design/DAFyL7BxLac/uDlt9O3bX-8pazs00AGf-A/view?embed"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <a
                    href="https://www.canva.com/design/DAFyL7BxLac/uDlt9O3bX-8pazs00AGf-A/view?utm_content=DAFyL7BxLac&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                    target="_blank"
                    rel="noopener"
                  ></a>
                  <a href="">
                    <MdFavorite />
                    &nbsp;&nbsp; Favoritos
                  </a>
                  <div id="contenido2" style={{ display: "none" }}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: 0,
                        paddingTop: "56.25%",
                        paddingBottom: 0,
                        boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
                        marginTop: "1.6em",
                        marginBottom: "0.9em",
                        overflow: "hidden",
                        borderRadius: 8,
                        willChange: "transform",
                      }}
                    >
                      <iframe
                        loading="lazy"
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          top: 0,
                          left: 0,
                          border: "none",
                          padding: 0,
                          margin: 0,
                        }}
                        src="https://www.canva.com/design/DAFw9HiLYXg/view?embed"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <a
                      href="https://www.canva.com/design/DAFw9HiLYXg/view?utm_content=DAFw9HiLYXg&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                      target="_blank"
                      rel="noopener"
                    >
                      soñemos juntos
                    </a>
                    de sandra murcia gonzales
                  </div>
                  <div id="contenido3" style={{ display: "none" }}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: 0,
                        paddingTop: "141.4286%",
                        paddingBottom: 0,
                        boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
                        marginTop: "1.6em",
                        marginBottom: "0.9em",
                        overflow: "hidden",
                        borderRadius: 8,
                        willChange: "transform",
                      }}
                    >
                      <iframe
                        loading="lazy"
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          top: 0,
                          left: 0,
                          border: "none",
                          padding: 0,
                          margin: 0,
                        }}
                        src="https://www.canva.com/design/DAFqt1Tp73o/watch?embed"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <a
                      href="https://www.canva.com/design/DAFqt1Tp73o/watch?utm_content=DAFqt1Tp73o&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                      target="_blank"
                      rel="noopener"
                    >
                      EL ELEFANTE BERNARDO
                    </a>
                    de sandra murcia gonzales
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
