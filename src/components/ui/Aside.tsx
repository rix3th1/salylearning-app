import { dm_sans } from "@/app/fonts";
import authOptions from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import AsideOptionsList from "./AsideOptionsList";
import CloseButton from "./CloseButton";
import SalyFigure from "./SalyFigure";

export default async function Aside() {
  const session = await getServerSession(authOptions);
  const isStudent = session?.user.rol === "ESTUDIANTE";
  const isTeacher = session?.user.rol === "DOCENTE";

  return (
    <div
      className="navbar-lateral full-reset"
      style={{
        position: "fixed",
      }}
    >
      <span className="visible-xs font-movile-menu"></span>
      <div className="full-reset container-menu-movile">
        <div className="logo full-reset">
          <CloseButton />
          SALY LEARNING
        </div>
        <div
          className="full-reset"
          style={{
            backgroundColor: "#e9ecef",
            padding: "10px 0",
            color: "#fff",
          }}
        >
          <SalyFigure canChange={isStudent} />
        </div>
        <div
          className={`full-reset nav-lateral-list-menu ${dm_sans.className}`}
        >
          <AsideOptionsList isStudent={isStudent} isTeacher={isTeacher} />
        </div>
      </div>
    </div>
  );
}
