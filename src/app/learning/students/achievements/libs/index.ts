export function generarLogros(contadoresLogros: any[]) {
  const logros = [];

  // Logros por libros leídos
  for (let i = 10; i <= contadoresLogros[0]; i += 10) {
    logros.push(`Leídos ${i} libros.`);
  }

  // Logros por preguntas correctas
  for (let i = 100; i <= contadoresLogros[1]; i += 100) {
    logros.push(`Respondidas correctamente ${i} preguntas.`);
  }

  // Logros por tiempo de lectura
  for (let i = 100; i <= contadoresLogros[2]; i += 100) {
    logros.push(`${i} minutos de tiempo de lectura.`);
  }

  return logros;
}
