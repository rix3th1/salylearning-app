export const mapNombresEstudiantes = (estudiantes: any) => {
  return estudiantes.map(
    (estudiante: any) =>
      estudiante.usuario.p_nombre + " " + estudiante.usuario.p_apellido
  );
};
