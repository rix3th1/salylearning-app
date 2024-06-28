"use client";

import { Tooltip } from "react-tooltip";
import HelpButton from "./HelpButton";
import MyProfileButton from "./MyProfileButton";
import PowerButton from "./PowerButton";
import SearchBookButton from "./SearchBookButton";

interface IProps {
  user: any;
  isStudent: boolean;
}

export default function NavInteractionButtons({ user, isStudent }: IProps) {
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

      <Tooltip id="tooltip-navbar-actions" place="bottom" />
    </>
  );
}
