import HelpButton from "./HelpButton";
import PowerButton from "./PowerButton";
import SearchBookButton from "./SearchBookButton";

interface IProps {
  isStudent: boolean;
}

export default function NavInteractionButtons({ isStudent }: IProps) {
  return (
    <>
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
