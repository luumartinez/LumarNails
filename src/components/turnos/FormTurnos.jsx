import { useContext, useState } from "react";
import { TurnosContexto } from "../../context/TurnosContext";
import "./formTurnos.css";
import { UsuariosContexto } from "../../context/UsuariosContext";

const FormTurnos = () => {
  const { agendarTurno } = useContext(TurnosContexto);

  const usuarioActual = localStorage.getItem("usuario");
  const usuarioJson = JSON.parse(usuarioActual);

  const [turnos, setTurnos] = useState({
    nombre: "",
    apellido: "",
    fecha: "",
    hora: "",
    servicio: "",
  });

  const handleChange = (e) => {
    setTurnos({
      ...turnos,
      nombre: usuarioJson.nombre,
      apellido: usuarioJson.apellido,
      [e.target.name]: e.target.value,
    });
  };

  const opcionesHora =() =>{
    const opciones = [];
    for (let hora = 9; hora <= 20; hora++) {
      opciones.push(
        <option key={hora} value={`${hora}:00`}>
          {`${hora}:00`}
        </option>
      );
    }
    return opciones;
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    agendarTurno(turnos);
    setTurnos({
      nombre: "",
      apellido: "",
      fecha: "",
      hora: "",
      servicio: "",
    });
  };

  return (
    <>
      <div className="tituloFormTurno d-flex justify-content-center">
        <h3>AGENDAR TURNO</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="nombre"
            className="form-control"
            name="nombre"
            value={usuarioJson.nombre}
            onChange={handleChange}
            placeholder="Nombre de quien recibirá el servicio"
            minLength="2"
            maxLength="15"
            disabled
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="apellido"
            className="form-control"
            name="apellido"
            value={usuarioJson.apellido}
            onChange={handleChange}
            placeholder="Apellido de quien recibirá el servicio"
            minLength="2"
            maxLength="15"
            disabled
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">
            Fecha
          </label>
          <input
            type="date"
            className="form-control"
            vale={turnos.fecha}
            onChange={handleChange}
            name="fecha"
            required
          ></input>
        </div>
        <div className="mb-3">
          {/* <label htmlFor="hora" className="form-label">
            Hora
          </label>
          <input
            type="time"
            className="form-control"
            name="hora"
            value={turnos.hora}
            onChange={handleChange}
            required
          ></input> */}
          <label htmlFor="hora" className="form-label">
            Hora
          </label>
          <select
            className="form-control"
            name="hora"
            value={turnos.hora}
            onChange={handleChange}
            required
          >
            <option value="">Hora deseada</option>
            {opcionesHora()}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="servicio" className="form-label">
            Servicio
          </label>
          <select
            type="text"
            className="form-control"
            name="servicio"
            value={turnos.servicio}
            onChange={handleChange}
            required
          >
            <option>Elegí un opción</option>
            <option value="1">Semi permanente</option>
            <option value="2">Lifting de pestañas</option>
            <option value="3">Soft gel</option>
            <option value="4">Capping</option>
          </select>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="botonAgendarTurno">
            AGENDAR
          </button>
        </div>
      </form>
    </>
  );
};

export default FormTurnos;
