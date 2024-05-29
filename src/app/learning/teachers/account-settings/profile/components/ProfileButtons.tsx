"use client";

import ModalAvatar from "@/app/learning/components/ModalAvatar";
import { showSwalUploadProfilePhoto } from "@/app/learning/handlers/upload-profile-photo";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export interface IProps {
  foto_perfil_id: string;
  avatar_id: string;
}

export default function ProfileButtons({ avatar_id, foto_perfil_id }: IProps) {
  const avatarModal = useRef<HTMLDivElement>(null);

  const router = useRouter();

  return (
    <div className="d-flex justify-content-center mb-2">
      <button
        className="btn btn-primary"
        style={{ marginRight: "15px" }}
        onClick={() => showSwalUploadProfilePhoto(foto_perfil_id, router)}
      >
        Subir foto
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          if (avatarModal.current) {
            avatarModal.current.style.display = "block";
          }
        }}
      >
        Elegir avatar
      </button>

      {/* Avatar modal */}
      <ModalAvatar
        avatar_id={avatar_id}
        avatarModal={avatarModal}
        userType="DOCENTE"
      />
    </div>
  );
}
