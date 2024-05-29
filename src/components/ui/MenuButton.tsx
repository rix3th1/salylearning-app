import { MdMenu } from "react-icons/md";

export default function MenuButton() {
  return (
    <li className="mobile-menu-button visible-xs" style={{ float: "left" }}>
      <MdMenu style={{ fontSize: 25, marginTop: 15 }} />
    </li>
  );
}
