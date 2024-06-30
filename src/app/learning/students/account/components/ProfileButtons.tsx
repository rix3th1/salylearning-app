"use client";

import ModalAvatar from "@/app/learning/components/ModalAvatar";
import { showSwalUploadProfilePhoto } from "@/app/learning/handlers/upload-profile-photo";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { MdPhoto, MdUpload } from "react-icons/md";

export interface IProps {
  foto_perfil_id: string;
  avatar_id: string;
}

export default function ProfileButtons({ foto_perfil_id, avatar_id }: IProps) {
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  const router = useRouter();

  return (
    <div className="profile-buttons">
      <button
        className="btn btn-primary mr-2"
        style={{ margin: "1rem .2rem" }}
        onClick={() => showSwalUploadProfilePhoto(foto_perfil_id, router)}
      >
        <MdUpload style={{ position: "relative", top: 1 }} /> Subir foto
      </button>
      <button
        className="btn btn-outline-primary"
        style={{ margin: "0 .2rem" }}
        onClick={() => {
          setIsAvatarModalOpen(true);
        }}
      >
        <MdPhoto style={{ position: "relative", top: 1 }} /> Elegir Avatar
      </button>

      {/* Avatar modal */}
      <ModalAvatar
        avatar_id={avatar_id}
        isAvatarModalOpen={isAvatarModalOpen}
        setIsAvatarModalOpen={setIsAvatarModalOpen}
        userType="ESTUDIANTE"
      />
    </div>
  );
}
