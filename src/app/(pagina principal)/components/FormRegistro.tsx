export default function FormRegistro() {
  return (
    <form>
      <h1 className="text-light text-center pt-3 pb-1">CREAR CUENTA</h1>
      {/* Primera Fila */}
      <div className="row">
        <div className="form-group col-md-6 py-3">
          <input
            name="p_nombre"
            type="text"
            className="form-control"
            placeholder="Primer nombre"
            required
          />
        </div>
        <div className="form-group col-md-6 py-3">
          <input
            name="s_nombre"
            type="text"
            className="form-control"
            placeholder="Segundo nombre"
          />
        </div>
      </div>
      {/* Segunda Fila */}
      <div className="row">
        <div className="form-group col-md-6 py-3">
          <input
            name="p_apellido"
            type="text"
            className="form-control"
            placeholder="Primer apellido"
            required
          />
        </div>
        <div className="form-group col-md-6 py-3">
          <input
            name="s_apellido"
            type="text"
            className="form-control"
            placeholder="Segundo apellido"
          />
        </div>
      </div>
      {/* Tercera Fila */}
      <div className="row">
        <div className="form-group col-md-6 py-3">
          <input
            name="edad"
            type="number"
            className="form-control"
            placeholder="Edad"
            required
          />
        </div>
        <div className="form-group col-md-6 py-3">
          <select
            name="id_grado"
            id="gradoEscolar"
            className="form-control"
            required
          >
            <option value="">Seleccione su grado escolar</option>
            <option value={1}>Primero</option>
            <option value={2}>Segundo</option>
            <option value={3}>Tercero</option>
            <option value={4}>Cuarto</option>
            <option value={5}>Quinto</option>
          </select>
        </div>
        <div className="form-group col-md-6 py-3">
          <select name="rol" id="rol" className="form-control" required>
            <option value="">Seleccione su rol</option>
            <option value={1}>Docente</option>
            <option value={2}>Estudiante</option>
          </select>
        </div>
        <div className="form-group col-md-6 py-3">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Correo electrónico"
            required
            autoComplete="email"
          />
        </div>
        <div className="form-group col-md-6 py-3">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Contraseña"
            required
            minLength={6}
            autoComplete="new-password"
          />
        </div>
      </div>
      {/* cuarta Fila */}
      <div className="row">
        <div className="form-group col-md-6 py-3">
          <input
            name="confirmar_password"
            type="password"
            className="form-control"
            placeholder="Confirmar contraseña"
            required
            minLength={6}
            autoComplete="new-password"
          />
        </div>
        <div className="form-group col-md-6 py-2 mb-4">
          <button type="submit" className="btn w-100 ingresar">
            REGISTRARME
          </button>
        </div>
      </div>
    </form>
  );
}
