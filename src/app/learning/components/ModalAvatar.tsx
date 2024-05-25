import Image from "next/image";
import "../css/modal-avatar.style.css";
import avatars from "../meta/avatars.json";

interface IProps {
  avatarModal: React.RefObject<HTMLDivElement>;
}

export default function ModalAvatar({ avatarModal }: IProps) {
  return (
    <div className="avatar-modal" ref={avatarModal}>
      <div className="avatar-modal-content">
        <span
          className="avatar-close"
          onClick={() => {
            if (avatarModal.current) {
              avatarModal.current.style.display = "none";
            }
          }}
        >
          ×
        </span>
        <h5 style={{ marginBottom: "1.5rem" }}>Selecciona tu foto de perfíl</h5>
        <div id="avatar-options">
          {avatars.estudiantes.map(({ src, alt }, i) => (
            <Image
              key={i}
              className="avatar-option"
              src={src}
              alt={alt}
              width={100}
              height={100}
              quality={75}
            />
          ))}
        </div>
        <section style={{ margin: "0.5rem" }}>
          <button
            type="submit"
            className="btn btn-outline-primary"
            style={{ margin: "0 .5rem", marginTop: "1rem" }}
          >
            Aceptar
          </button>
          <button
            className="btn btn-outline-primary"
            style={{ margin: "0 .5rem", marginTop: "1rem" }}
            onClick={() => {
              if (avatarModal.current) {
                avatarModal.current.style.display = "none";
              }
            }}
          >
            Cancelar
          </button>
        </section>
      </div>
    </div>
  );
}
