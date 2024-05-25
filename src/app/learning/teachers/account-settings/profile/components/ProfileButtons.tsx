"use client";

import AvatarModal from "@/app/learning/components/AvatarModal";
import { useRef } from "react";

export default function ProfileButtons() {
  const avatarModal = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <input
          type="file"
          id="uploadImage"
          style={{ display: "none" }}
          accept="image/*"
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginRight: "15px" }}
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
      </div>

      {/* Avatar modal */}
      <AvatarModal avatarModal={avatarModal} />
    </>
  );
}
