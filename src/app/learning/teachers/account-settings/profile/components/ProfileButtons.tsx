"use client";

import ModalAvatar from "@/app/learning/components/ModalAvatar";
import { showSwalUploadProfilePhoto } from "@/app/learning/handlers/upload-profile-photo";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";

export interface IProps {
  foto_perfil_id: string;
  avatar_id: string;
}

export default function ProfileButtons({ avatar_id, foto_perfil_id }: IProps) {
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

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
          setIsAvatarModalOpen(true);
        }}
      >
        Elegir avatar
      </button>

      {/* Avatar modal */}
      <ModalAvatar
        avatar_id={avatar_id}
        isAvatarModalOpen={isAvatarModalOpen}
        setIsAvatarModalOpen={setIsAvatarModalOpen}
        userType="DOCENTE"
      />
    </div>
  );
}
