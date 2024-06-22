const obtenerRespuesta = (respuestas: any[], index: number): string => {
  return respuestas[index]?.respuesta;
};

const obtenerOpcionesRespuesta = (opciones_respuesta: any[], index: number) => {
  return opciones_respuesta.slice(index * 4, (index + 1) * 4);
};

export const questionIsCorrect = (opcion_respuesta: any, respuesta: any) => {
  return (
    opcion_respuesta.opcion === respuesta.opcion_correcta &&
    opcion_respuesta.opcion === respuesta.respuesta
  );
};

const mapDataRespuestas = (cuestionario: any) => {
  return cuestionario.preguntas.map((pregunta: any, index: number) => ({
    id: pregunta.id,
    pregunta: pregunta.pregunta,
    opcion_correcta: pregunta.opcion_correcta,
    opciones_respuesta: obtenerOpcionesRespuesta(
      cuestionario.opciones_respuesta,
      index
    ),
    respuesta: obtenerRespuesta(cuestionario.respuestas, index),
  }));
};

export const getRespuestasData = (cuestionario: any) => {
  const respuestas = mapDataRespuestas(cuestionario);
  const preguntas_totales = respuestas.length;
  let respuestas_correctas = 0;

  respuestas.forEach((respuesta: any) => {
    respuesta.opciones_respuesta.forEach((opcion_respuesta: any) => {
      const isCorrect = questionIsCorrect(opcion_respuesta, respuesta);

      if (isCorrect) {
        respuestas_correctas++;
      }
    });
  });

  const calificacion = (respuestas_correctas / preguntas_totales) * 5;

  return {
    respuestas,
    calificacion,
  };
};
