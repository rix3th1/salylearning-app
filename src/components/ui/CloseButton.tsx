import { MdClose } from "react-icons/md";

export default function CloseButton() {
  return (
    <MdClose
      className="visible-xs pull-left mobile-menu-button"
      style={{
        cursor: "pointer",
        margin: "17px 26px",
      }}
    />
  );
}
