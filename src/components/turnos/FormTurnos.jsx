import { useContext, useState } from "react";
import { TurnosContexto } from "../../context/TurnosContext";
import "./formTurnos.css"

const FormTurnos = () => {
  const { agendarTurno } = useContext(TurnosContexto);

  const [turnos, setTurnos] = useState({
    nombre:"",
    apellido:"",
    fecha:"",
    hora:"",
    servicio:""
  });

const handleChange = (e) =>{
    setTurnos({...turnos, [e.target.name]: e.target.value})
};

  const handleSubmit = (e) => {
    e.preventDefault();
    agendarTurno(turnos);
    setTurnos({
        nombre:"",
        apellido:"",
        fecha:"",
        hora:"",
        servicio:""
    })
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
            vale={turnos.nombre}
            onChange={handleChange}
            placeholder="Nombre de quien recibirá el servicio"
            required
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
            vale={turnos.apellido}
            onChange={handleChange}
            placeholder="Apellido de quien recibirá el servicio"
            required
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
          <label htmlFor="hora" className="form-label">
            Hora
          </label>
          <input
            type="time"
            className="form-control"
            name="hora"
            vale={turnos.hora}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="servicio" className="form-label">
            Servicio
          </label>
          <input
            type="text"
            className="form-control"
            name="servicio"
            vale={turnos.email}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="d-flex justify-content-center">
        <button type="submit" className="botonAgendarTurno">AGENDAR</button>
        </div>
      </form>
    </>
  );
};

export default FormTurnos;
