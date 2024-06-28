"use client";

import { profileImage } from "@/utils/getProfileImage";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";

interface IProps {
  href: string;
  user: any;
}

export default function MyProfileButton({ href, user }: IProps) {
  const router = useRouter();

  const handleClickProfileRedirect = () => {
    router.push(href);
  };

  return (
    <figure>
      <Image
        onClick={handleClickProfileRedirect}
        data-tooltip-id="tooltip-navbar-actions"
        data-tooltip-content="Mi perfíl"
        src={profileImage(user)}
        alt="Imagen usuario"
        className="img-responsive img-circle center-box"
        width={100}
        height={100}
        quality={100}
        priority
      />
    </figure>
  );
}
