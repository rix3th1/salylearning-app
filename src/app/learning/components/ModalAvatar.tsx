import { actualizarAvatarUsuario } from "@/services/avatar-usuario.service";
import { obtenerAvatars } from "@/services/avatars.service";
import { User } from "next-auth";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdCancel, MdCheck } from "react-icons/md";
import { toast } from "sonner";
import "../css/modal-avatar.style.css";

interface IProps {
  setIsAvatarModalOpen: (value: boolean) => void;
  isAvatarModalOpen: boolean;
  userType: User["rol"];
  avatar_id: string;
}

export default function ModalAvatar({
  isAvatarModalOpen,
  setIsAvatarModalOpen,
  userType,
  avatar_id,
}: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [idAvatarSelected, setIdAvatarSelected] = useState<number | null>(null);
  const [avatars, setAvatars] = useState([]);
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleAvatarClick = (id_avatar: number) => {
    setIdAvatarSelected(id_avatar);
  };

  const handleAcceptClick = () => {
    setIsLoading(true);

    if (!idAvatarSelected) {
      setError(true);
      return;
    }

    const avatar = { id_avatar: `${idAvatarSelected}` };
    toast.promise(actualizarAvatarUsuario(avatar_id, avatar), {
      success() {
        router.refresh();
        setIsAvatarModalOpen(false);
        return "Avatar actualizado correctamente!";
      },
      error(error) {
        if (error instanceof Error) {
          return error.message.replace(/,/g, ", ");
        }
      },
      finally() {
        setIsLoading(false);
      },
    });
  };

  useEffect(() => {
    if (!isAvatarModalOpen || avatars.length > 0) return;

    toast.promise(obtenerAvatars(userType), {
      loading: "Cargando avatares...",
      success(data) {
        setAvatars(data);
        return "Listo";
      },
      error(error) {
        if (error instanceof Error) {
          return error.message.replace(/,/g, ", ");
        }
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAvatarModalOpen]);

  return (
    <div
      className="avatar-modal"
      style={{ display: isAvatarModalOpen ? "block" : "none" }}
    >
      <div className="avatar-modal-content">
        <span
          className="avatar-close"
          onClick={() => {
            setIsAvatarModalOpen(false);
          }}
        >
          ×
        </span>
        <h3 style={{ marginBottom: "1.5rem" }}>
          Por favor, selecciona tu foto de perfíl:
        </h3>

        <div>
          {avatars.length > 0 ? (
            avatars.map((avatar: any, i) => (
              <Image
                key={i}
                className={`avatar-option ${
                  idAvatarSelected === avatar.id ? "selected" : ""
                }`}
                src={`/img/avatars/${userType}/${avatar.nom_avatar}`}
                alt={avatar.descripcion}
                width={100}
                height={100}
                quality={75}
                onClick={() => handleAvatarClick(avatar.id)}
              />
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </div>

        {error && (
          <div
            className="alert alert-danger"
            role="alert"
            style={{ marginTop: "1rem" }}
          >
            <p>Por favor, selecciona un avatar.</p>
          </div>
        )}

        <section style={{ margin: "0.5rem" }}>
          <button
            type="submit"
            className="btn btn-outline-primary"
            style={{ margin: "0 .5rem", marginTop: "1rem" }}
            onClick={handleAcceptClick}
            disabled={isLoading || avatars.length === 0}
          >
            <MdCheck style={{ position: "relative", top: 1 }} />{" "}
            {isLoading ? "Cargando..." : "Aceptar"}
          </button>
          <button
            className="btn btn-outline-primary"
            style={{ margin: "0 .5rem", marginTop: "1rem" }}
            onClick={() => {
              setIsAvatarModalOpen(false);
            }}
            disabled={isLoading || avatars.length === 0}
          >
            <MdCancel style={{ position: "relative", top: 1 }} /> Cancelar
          </button>
        </section>
      </div>
    </div>
  );
}
