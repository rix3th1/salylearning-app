"use client";

import ModalAvatar from "@/app/learning/components/ModalAvatar";
import { showSwalUploadProfilePhoto } from "@/app/learning/handlers/upload-profile-photo";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export interface IProps {
  foto_perfil_id: string;
  avatar_id: string;
}

export default function ProfileButtons({ foto_perfil_id, avatar_id }: IProps) {
  const avatarModal = useRef<HTMLDivElement>(null);

  const router = useRouter();

  return (
    <div className="profile-buttons">
      <button
        className="btn btn-primary mr-2"
        style={{ margin: "1rem .2rem" }}
        onClick={() => showSwalUploadProfilePhoto(foto_perfil_id, router)}
      >
        Subir foto
      </button>
      <button
        className="btn btn-outline-primary"
        style={{ margin: "0 .2rem" }}
        onClick={() => {
          if (avatarModal.current) {
            avatarModal.current.style.display = "block";
          }
        }}
      >
        Elegir Avatar
      </button>

      {/* Avatar modal */}
      <ModalAvatar
        avatar_id={avatar_id}
        avatarModal={avatarModal}
        userType="ESTUDIANTE"
      />
    </div>
  );
}
