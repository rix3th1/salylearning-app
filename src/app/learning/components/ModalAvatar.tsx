import Image from "next/image";
import "../css/modal-avatar.style.css";

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
        <h5>Selecciona tu foto de perfíl</h5>
        <div id="avatar-options">
          <Image
            className="avatar-option"
            src="/img/user01.png"
            alt="avatar1"
            width={100}
            height={100}
            quality={75}
          />
          <Image
            className="avatar-option"
            src="/img/user02.png"
            alt="avatar2"
            width={100}
            height={100}
            quality={75}
          />
          <Image
            className="avatar-option"
            src="/img/user03.png"
            alt="avatar3"
            width={100}
            height={100}
            quality={75}
          />
        </div>
        <div id="avatar-options">
          <Image
            className="avatar-option"
            src="/img/user04.png"
            alt="avatar4"
            width={100}
            height={100}
            quality={75}
          />
          <Image
            className="avatar-option"
            src="/img/user05.png"
            alt="avatar5"
            width={100}
            height={100}
            quality={75}
          />
          <Image
            className="avatar-option"
            src="/img/user.png"
            alt="avatar6"
            width={100}
            height={100}
            quality={75}
          />
        </div>
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
      </div>
    </div>
  );
}
