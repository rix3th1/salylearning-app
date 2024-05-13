import type { Metadata } from "next";
import InfoAccountVerified from "./components/InfoAccountVerified";

export const metadata: Metadata = {
  title: "Verificar cuenta | Saly Learning",
};

export default function VerifyAccountPage() {
  return (
    <>
      <section className="py-5">
        <div className="container px-5">
          {/* Contact form */}
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <InfoAccountVerified />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
