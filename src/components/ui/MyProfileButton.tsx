import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";

interface IProps {
  href: string;
}

export default function MyProfileButton({ href }: IProps) {
  return (
    <li
      className="tooltips-general"
      data-toggle="tooltip"
      data-placement="bottom"
      title="Mi perfíl"
    >
      <Link href={href} className="simple-link">
        <MdAccountCircle
          style={{ fontSize: 25, marginTop: 15, marginRight: 15 }}
        />
      </Link>
    </li>
  );
}
