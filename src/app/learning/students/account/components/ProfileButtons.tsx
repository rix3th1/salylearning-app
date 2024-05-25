"use client";

import AvatarModal from "@/app/learning/components/AvatarModal";
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
    <div className="profile-buttons">
      <button
        className="btn btn-primary mr-2"
        style={{ margin: "1rem .2rem" }}
        onClick={() => showSwalUploadProfilePhoto(userId, router)}
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
      <AvatarModal avatarModal={avatarModal} />
    </div>
  );
}
