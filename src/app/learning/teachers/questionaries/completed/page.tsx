import PageHeader from "@/app/learning/components/PageHeader";
import calendarBookImage from "@/assets/calendar_book.png";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import QuestionariesTabs from "../components/QuestionariesTabs";
import TableCompletedQuestionaries from "./components/TableCompletedQuestionaries";

export const metadata: Metadata = {
  title: "Completados (Cuestionarios): Docentes | Saly Learning",
};

export default function CompletedQuestionariesPage() {
  return (
    <>
      <PageHeader title="Cuestionarios completos" />

      <QuestionariesTabs />

      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src={calendarBookImage}
              alt="calendario"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            ¡Bienvenido a esta sección! Aquí podrás visualizar el estado de tus
            proyectos, clasificados como completos, incompletos o no logrados.
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="text-center">Cuestionarios completos</h2>

        <Suspense fallback={<Fallback />}>
          <TableCompletedQuestionaries />
        </Suspense>
      </div>
    </>
  );
}
