import { actualizarAvatarUsuario } from "@/services/avatar-usuario.service";
import { obtenerAvatars } from "@/services/avatars.service";
import { User } from "next-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import "../css/modal-avatar.style.css";

interface IProps {
  avatarModal: React.RefObject<HTMLDivElement>;
  userType: User["rol"];
  avatar_id: string;
}

export default function ModalAvatar({
  avatarModal,
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

      if (avatarModal.current) {
        avatarModal.current.style.display = "none";
      }
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
  }, []);

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
          {avatars.map((avatar: any, i) => (
            <Image
              key={i}
              className={`avatar-option${
                idAvatarSelected === avatar.id ? " selected" : ""
              }`}
              src={`/img/avatars/${userType}/${avatar.nom_avatar}`}
              alt={avatar.descripcion}
              width={100}
              height={100}
              quality={75}
              onClick={() => handleAvatarClick(avatar.id)}
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
