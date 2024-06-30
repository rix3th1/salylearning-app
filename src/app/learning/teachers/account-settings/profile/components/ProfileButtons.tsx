"use client";

import ModalAvatar from "@/app/learning/components/ModalAvatar";
import { showSwalUploadProfilePhoto } from "@/app/learning/handlers/upload-profile-photo";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { MdPhotoAlbum, MdUpload } from "react-icons/md";

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
        <MdUpload style={{ position: "relative", top: 2 }} /> Subir foto
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setIsAvatarModalOpen(true);
        }}
      >
        <MdPhotoAlbum style={{ position: "relative", top: 2 }} /> Elegir
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
