"use client";

import { useEffect } from "react";
import HelpButton from "./HelpButton";
import MyProfileButton from "./MyProfileButton";
import PowerButton from "./PowerButton";
import SearchBookButton from "./SearchBookButton";

interface IProps {
  user: any;
  isStudent: boolean;
}

export default function NavInteractionButtons({ user, isStudent }: IProps) {
  useEffect(() => {
    $(() => $('[data-toggle="tooltip"]').tooltip());
  }, []);

  return (
    <>
      <MyProfileButton
        user={user}
        href={`/learning/${
          isStudent ? "students/account" : "teachers/account-settings/profile"
        }`}
      />

      <PowerButton />
      {isStudent && (
        <>
          <SearchBookButton />
          <HelpButton />
        </>
      )}
    </>
  );
}
