import PageHeader from "@/app/learning/components/PageHeader";
import calendarImage from "@/assets/calendar.png";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import QuestionariesTabs from "../components/QuestionariesTabs";
import TableNotAchievedQuestionaries from "./components/TableNotAchievedQuestionaries";

export const metadata: Metadata = {
  title: "No logrados (Cuestionarios): Docentes | Saly Learning",
};

export default function NotAchievedQuestionaries() {
  return (
    <>
      <PageHeader title="Cuestionarios no logrados" />

      <QuestionariesTabs />

      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src={calendarImage}
              alt="clock"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            ¡Bienvenido a esta sección! Aquí encontrarás una lista de
            cuestionarios que aún no se han completado. ¡Anímate a retomarlos y
            avanzar en tu progreso!
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="text-center">Listado de no logrados</h2>

        <Suspense fallback={<Fallback />}>
          <TableNotAchievedQuestionaries />
        </Suspense>
      </div>
    </>
  );
}
