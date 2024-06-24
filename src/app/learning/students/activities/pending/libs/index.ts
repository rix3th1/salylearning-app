export const mapPreguntas = (cuestionario: any) => {
  return cuestionario.preguntas.map((pregunta: any, index: number) => ({
    id: pregunta.id,
    pregunta: pregunta.pregunta,
    opciones_respuesta: cuestionario.opciones_respuesta.slice(
      index * 4,
      (index + 1) * 4
    ),
  }));
};
