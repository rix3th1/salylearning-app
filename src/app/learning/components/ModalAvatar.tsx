import { actualizarAvatarUsuario } from "@/services/avatar-usuario.service";
import { obtenerAvatars } from "@/services/avatars.service";
import { User } from "next-auth";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
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

  const router = useRouter();

  const handleAvatarClick = (id_avatar: number) => {
    setIdAvatarSelected(id_avatar);
  };

  const handleAcceptClick = async () => {
    setIsLoading(true);

    try {
      if (!idAvatarSelected) {
        return toast.error("Por favor, selecciona un avatar.");
      }

      await actualizarAvatarUsuario(avatar_id, {
        id_avatar: `${idAvatarSelected}`,
      });

      setIsAvatarModalOpen(false);
      toast.success("Avatar actualizado correctamente!");
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.replace(/,/g, ", "));
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isAvatarModalOpen || avatars.length > 0) return;

    toast.promise(
      obtenerAvatars(userType)
        .then((data) => {
          setAvatars(data);
        })
        .catch((error) => {
          if (error instanceof Error) {
            toast.error(error.message.replace(/,/g, ", "));
          }
        }),
      {
        loading: "Cargando avatares...",
        success: "Listo",
      }
    );

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
        <section style={{ margin: "0.5rem" }}>
          <button
            type="submit"
            className="btn btn-outline-primary"
            style={{ margin: "0 .5rem", marginTop: "1rem" }}
            onClick={handleAcceptClick}
            disabled={isLoading || avatars.length === 0}
          >
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
            Cancelar
          </button>
        </section>
      </div>
    </div>
  );
}
