import { User } from "next-auth";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import "../css/modal-avatar.style.css";
import avatars from "../meta/avatars.json";

interface IProps {
  avatarModal: React.RefObject<HTMLDivElement>;
  userType: User["rol"];
}

export default function ModalAvatar({ avatarModal, userType }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const handleAvatarClick = (avatar: string) => {
    setSelectedAvatar(avatar);
  };

  const handleAcceptClick = async () => {
    setIsLoading(true);

    try {
      if (!selectedAvatar) {
        return toast.error("Por favor, selecciona un avatar.");
      }

      console.log(`Avatar seleccionado: ${selectedAvatar}`);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

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
        <h3 style={{ marginBottom: "1.5rem" }}>
          Por favor, selecciona tu foto de perfíl:
        </h3>
        <div id="avatar-options">
          {avatars[userType].map(({ src, alt }, i) => (
            <Image
              key={i}
              className={`avatar-option${
                selectedAvatar === src ? " selected" : ""
              }`}
              src={`/img/avatars/${userType}/${src}`}
              alt={alt}
              width={100}
              height={100}
              quality={75}
              onClick={() => handleAvatarClick(src)}
            />
          ))}
        </div>
        <section style={{ margin: "0.5rem" }}>
          <button
            type="submit"
            className="btn btn-outline-primary"
            style={{ margin: "0 .5rem", marginTop: "1rem" }}
            onClick={handleAcceptClick}
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Aceptar"}
          </button>
          <button
            className="btn btn-outline-primary"
            style={{ margin: "0 .5rem", marginTop: "1rem" }}
            onClick={() => {
              if (avatarModal.current) {
                avatarModal.current.style.display = "none";
              }
            }}
            disabled={isLoading}
          >
            Cancelar
          </button>
        </section>
      </div>
    </div>
  );
}
