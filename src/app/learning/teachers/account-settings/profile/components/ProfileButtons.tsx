"use client";

import ModalAvatar from "@/app/learning/components/ModalAvatar";
import { showSwalUploadProfilePhoto } from "@/app/learning/handlers/upload-profile-photo";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export interface IProps {
  userId: string;
}

export default function ProfileButtons({ userId }: IProps) {
  const avatarModal = useRef<HTMLDivElement>(null);

  const router = useRouter();

  return (
    <div className="d-flex justify-content-center mb-2">
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginRight: "15px" }}
        onClick={() => showSwalUploadProfilePhoto(userId, router)}
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
      <ModalAvatar avatarModal={avatarModal} userType="DOCENTE" />
    </div>
  );
}
