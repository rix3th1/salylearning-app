"use client";

import AvatarModal from "@/app/learning/components/AvatarModal";
import { useRef } from "react";

export default function ProfileButtons() {
  const avatarModal = useRef<HTMLDivElement>(null);

  return (
    <div className="profile-buttons">
      <button className="btn btn-primary mr-2" style={{ margin: "1rem .2rem" }}>
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
