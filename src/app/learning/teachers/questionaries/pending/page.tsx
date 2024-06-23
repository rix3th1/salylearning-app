import PageHeader from "@/app/learning/components/PageHeader";
import clockImage from "@/assets/clock.png";
import Fallback from "@/components/Fallback";
import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import QuestionariesTabs from "../components/QuestionariesTabs";
import TablePendingQuestionaries from "./components/TablePendingQuestionaries";

export const metadata: Metadata = {
  title: "Pendientes (Cuestionarios): Docentes | Saly Learning",
};

export default function PendingQuestionaries() {
  return (
    <>
      <PageHeader title="Cuestionarios pendientes" />

      <QuestionariesTabs />

      <div className="container-fluid" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3">
            <Image
              src={clockImage}
              alt="calendar"
              className="img-responsive center-box"
              style={{ maxWidth: 110 }}
              width={110}
              height={110}
              quality={100}
              priority
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 text-justify lead">
            ¡Bienvenido a esta sección! Aquí podrás revisar los cuestionarios
            que aún están incompletos. ¡Anímate a retomarlos y trabajar para
            completarlos!
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="text-center">Listado de cuestionarios pendientes</h2>

        <Suspense fallback={<Fallback />}>
          <TablePendingQuestionaries />
        </Suspense>
      </div>
    </>
  );
}
