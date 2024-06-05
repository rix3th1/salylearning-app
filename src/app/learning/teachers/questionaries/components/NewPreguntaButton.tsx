"use client";

import { plus_jakarta_sans } from "@/app/fonts";
import {
  crearPregunta,
  crearPreguntaInitState,
} from "@/services/preguntas.service";
import { MdAddCircle, MdAddCircleOutline, MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FormNewQuestionary from "./FormNewQuestionary";

const showSwalNewQuestionary = async () => {
  const result = await withReactContent(Swal).fire({
    customClass: plus_jakarta_sans.className,
    title: "Crear nueva pregunta",
    html: <FormNewQuestionary />,
    showCancelButton: true,
    confirmButtonText: (
      <>
        <MdAddCircleOutline /> Crear pregunta
      </>
    ),
    cancelButtonText: (
      <>
        <MdCancel /> Cancelar
      </>
    ),
    showLoaderOnConfirm: true,
    preConfirm: async () => {
      let formData: typeof crearPreguntaInitState & {
        [key: string]: FormDataEntryValue;
      } = { ...crearPreguntaInitState };

      new FormData(Swal.getPopup()?.getElementsByTagName("form")[0]).forEach(
        (value, key) => {
          formData[key] = value;
        }
      );

      try {
        return await crearPregunta(formData);
      } catch (error) {
        if (error instanceof Error) {
          Swal.showValidationMessage(error.message.replace(/,/g, ", "));
        }
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  });

  if (result.isConfirmed) {
    Swal.fire({
      customClass: plus_jakarta_sans.className,
      title: "Pregunta creada exitosamente!",
      text: "Ya puedes agregar preguntas a tu curso en la sección de asignar actividades.",
      icon: "success",
      timer: 3000,
    });
  }
};

export default function NewPreguntaButton() {
  return (
    <div className="container" style={{ marginBottom: "15px" }}>
      <button
        className="btn btn-primary btn-lg"
        style={{ borderRadius: "2rem" }}
        onClick={showSwalNewQuestionary}
      >
        <MdAddCircle
          style={{ position: "relative", top: 3, fontSize: "18px" }}
        />{" "}
        Crear
      </button>
    </div>
  );
}
